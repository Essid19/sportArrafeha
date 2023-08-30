import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { T } from "src/app/data/matches";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-match-info",
  templateUrl: "./match-info.component.html",
  styleUrls: ["./match-info.component.css"],
})
export class MatchInfoComponent implements OnInit {
  id;
  obj = {};
  constructor(
    private activatedpath: ActivatedRoute,
    private service: MatchService
  ) {}

  ngOnInit() {
    this.id = this.activatedpath.snapshot.paramMap.get("id");
    this.service.getMatchById(this.id).subscribe((res): void => {
      res.match ? (this.obj = res.match) : (this.obj = res.msg);
    });
  }
}
