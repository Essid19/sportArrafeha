import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private sc: WeatherService) {}
  obj;
  msg = "";
  ngOnInit() {
    this.searchForm = this.fb.group({
      city: ["", [Validators.required]],
    });
  }
  search() {
    this.obj = null;
    this.msg = "";

    this.sc.sarchweather(this.searchForm.value).subscribe(
      (data) => {
        console.log(data);
        if (data.obj) {
          let val = data.obj.image;
          data.obj.image = `https://openweathermap.org/img/wn/${val}@2x.png`;
          this.obj = data.obj;
        } else {
          this.msg = data.msg;
        }
      },
      (error) => {
        this.msg = "Erreur lors de la requête à l'API";
        this.obj = null; // Réinitialiser les données en cas d'erreur
      }
    );
  }
}
