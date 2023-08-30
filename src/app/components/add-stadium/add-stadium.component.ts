import { FormGroup } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { StadiumService } from "src/app/services/stadium.service";

@Component({
  selector: "app-add-stadium",
  templateUrl: "./add-stadium.component.html",
  styleUrls: ["./add-stadium.component.css"],
})
export class AddStadiumComponent implements OnInit {
  stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
  addstadium: FormGroup;
  constructor(
    private fb: FormBuilder,
    private stadiumservice: StadiumService
  ) {}

  ngOnInit() {
    this.addstadium = this.fb.group({
      name: ["", [Validators.required]],
      capacity: ["", [Validators.required]],
      country: ["", [Validators.required]],
    });
  }

  addStadium() {
    this.addstadium.value.id = this.incrementation(this.stadiums);
    this.stadiums.push(this.addstadium.value);
    localStorage.setItem("stadiums", JSON.stringify(this.stadiums));
  }

  incrementation(t) {
    if (t.length == 0) {
      return 1;
    } else {
      let id = t[0].id;
      for (let i = 1; i < t.length; i++) {
        if (t[i].id > id) {
          id = t[i].id;
        }
      }
      return id + 1;
    }
  }
}
