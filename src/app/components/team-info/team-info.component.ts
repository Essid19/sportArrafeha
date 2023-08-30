import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { teams } from "src/app/data/matches";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-team-info",
  templateUrl: "./team-info.component.html",
  styleUrls: ["./team-info.component.css"],
})
export class TeamInfoComponent implements OnInit {
  constructor(
    private routerpath: ActivatedRoute,
    private service: TeamService
  ) {}
  id;
  obj;
  tab = teams;
  ngOnInit() {
    this.id = this.routerpath.snapshot.paramMap.get("id");
    this.service.getTeamById(this.id).subscribe((res): void => {
      res.team ? (this.obj = res.team) : (this.obj = res.msg);
    });
  }
}
