import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  match = { id: 3, scoreOne: 2, scoreTwo: 2, teamOne: "fcb", teamTwo: "real" };
  constructor() {}

  ngOnInit() {}
}
