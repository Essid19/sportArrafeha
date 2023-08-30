import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-add-team",
  templateUrl: "./add-team.component.html",
  styleUrls: ["./add-team.component.css"],
})
export class AddTeamComponent implements OnInit {
  team = {};
  addteam = "Add Team";
  addTeamForm: FormGroup;
  constructor(private router: Router, private x: TeamService) {}

  ngOnInit() {}
  addTeam() {
    console.log("here object", this.team);
    this.x.addTeam(this.team).subscribe((data): void => {
      console.log("here msg from BE", data.msg);
      this.router.navigate(["admin"]);
    });
  }
}
