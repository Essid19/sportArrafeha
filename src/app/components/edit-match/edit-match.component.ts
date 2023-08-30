import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { T } from "src/app/data/matches";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-edit-match",
  templateUrl: "./edit-match.component.html",
  styleUrls: ["./edit-match.component.css"],
})
export class EditMatchComponent implements OnInit {
  id: any;
  obj = {};
  editMatchForm: FormGroup;
  constructor(private matchService: MatchService, private router: Router) {}
  ngOnInit() {
    this.id = localStorage.getItem("idmatch");
    console.log("id", this.id);

    this.matchService.getMatchById(this.id).subscribe((e) => {
      console.log("obj", e);

      this.obj = e.match;
    });
  }

  update(): void {
    this.matchService.updateMatch(this.obj).subscribe((e) => {
      console.log(e.msg);
      this.router.navigate(["admin"]);
    });
  }
}
