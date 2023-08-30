import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { element } from "protractor";
import { stadiums, teams } from "src/app/data/matches";

@Component({
  selector: "app-search-team-stadium",
  templateUrl: "./search-team-stadium.component.html",
  styleUrls: ["./search-team-stadium.component.css"],
})
export class SearchTeamStadiumComponent implements OnInit {
  stadiumsTab = stadiums;
  teamsTab = teams;
  findedTeam: {};
  errorMsg: any;
  id: any;
  stadium;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      stadiumName: ["", [Validators.required, Validators.minLength(3)]],
    });
  }
  search() {
    let name = this.searchForm.value.stadiumName;
    console.log("here stadium name", name);
    // search stadium by name and return the object
    this.stadium = this.stadiumsTab.find((element) => {
      return element.name == name;
    });

    // search team by stadium id
    if (this.stadium) {
      this.errorMsg = "";
      for (let i = 0; i < this.teamsTab.length; i++) {
        if (this.teamsTab[i].id == this.stadium.id) {
          this.findedTeam = this.teamsTab[i];
          break;
        }
      }
    } else {
      this.errorMsg = "team not found";
    }
  }
}
