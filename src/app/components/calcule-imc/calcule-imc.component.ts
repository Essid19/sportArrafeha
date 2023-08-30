import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CalculeimcService } from "src/app/services/calculeimc.service";
import { PlayerSearchService } from "src/app/services/player-search.service";

@Component({
  selector: "app-calcule-imc",
  templateUrl: "./calcule-imc.component.html",
  styleUrls: ["./calcule-imc.component.css"],
})
export class CalculeImcComponent implements OnInit {
  chaine;
  errorMsg;
  searchplayerform: FormGroup;
  constructor(private fb: FormBuilder, private sc: CalculeimcService) {}

  ngOnInit() {
    this.searchplayerform = this.fb.group({
      name: ["", [Validators.required]],
      taille: ["", [Validators.required]],
      poids: ["", [Validators.required]],
    });
  }
  calcule() {
    alert("add imc clicked");
    console.log("here object", this.searchplayerform.value);
    this.sc.addImc(this.searchplayerform.value).subscribe((data) => {
      this.chaine = data.chaine;
      console.log("here msg from BE", data.chaine);
    });
    console.log(this.chaine);
  }
}
