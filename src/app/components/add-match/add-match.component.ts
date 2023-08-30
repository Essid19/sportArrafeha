import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatchService } from "src/app/services/match.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.css"],
})
export class AddMatchComponent implements OnInit {
  match = {};
  addmatch = "add Match";
  AddMatchForm: FormGroup;
  constructor(private matchService: MatchService, private router: Router) {}

  ngOnInit() {}
  addMatch() {
    alert("add match clicked");
    console.log("here object", this.match);
    this.matchService.addMatch(this.match).subscribe((data) => {
      console.log("here msg from BE", data.msg);
      this.router.navigate(["admin"]);
    });
  }
}
