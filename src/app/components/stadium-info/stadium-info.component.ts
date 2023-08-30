import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { stadiums } from "src/app/data/matches";

@Component({
  selector: "app-stadium-info",
  templateUrl: "./stadium-info.component.html",
  styleUrls: ["./stadium-info.component.css"],
})
export class StadiumInfoComponent implements OnInit {
  id;
  obj;
  t = JSON.parse(localStorage.getItem("stadiums") || "[]");
  constructor(private x: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.x.snapshot.paramMap.get("id");
    console.log(this.id);

    this.obj = this.t.find((element) => {
      return element.id == this.id;
    });
  }
}
