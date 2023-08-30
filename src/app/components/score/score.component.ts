import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"],
})
export class ScoreComponent implements OnInit {
  @Input() X;
  constructor(private router: Router) {}
  mypath;

  ngOnInit() {
    this.mypath = this.router.url;
    console.log(this.mypath);
  }
  scoreColor(sc1, sc2) {
    if (sc1 > sc2) {
      return "green";
    } else if (sc1 < sc2) {
      return "red";
    } else {
      return "blue";
    }
  }
}
