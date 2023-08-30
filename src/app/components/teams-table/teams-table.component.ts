import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { teams } from "src/app/data/matches";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-teams-table",
  templateUrl: "./teams-table.component.html",
  styleUrls: ["./teams-table.component.css"],
})
export class TeamsTableComponent implements OnInit {
  teamsstab;
  constructor(private router: Router, private x: TeamService) {}

  ngOnInit() {
    this.refresh();
  }
  display(x) {
    this.router.navigate([`teaminfo/${x}`]);
  }
  edit(x) {
    localStorage.setItem("idteam", x);
    this.router.navigate(["editteam"]);
  }
  delete(x) {
    alert(`team n ${x} delete`);
    this.x.deleteTeam(x).subscribe((e) => {
      this.refresh();
    });
  }
  refresh() {
    this.x.getAllTeam().subscribe((e) => {
      this.teamsstab = e.teams;
    });
  }
}
