import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { teams } from "src/app/data/matches";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-edit-team",
  templateUrl: "./edit-team.component.html",
  styleUrls: ["./edit-team.component.css"],
})
export class EditTeamComponent implements OnInit {
  id: any;
  obj;
  editTeamForm: FormGroup;
  constructor(private x: TeamService, private router: Router) {}

  ngOnInit() {
    this.id = localStorage.getItem("idteam");
    this.x.getTeamById(this.id).subscribe((e) => {
      this.obj = e.team;
    });
  }

  update() {
    this.x.updateTeam(this.obj).subscribe((e) => {
      console.log(e.msg);
      this.router.navigate(["admin"]);
    });
  }
}
