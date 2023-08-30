import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { stadiums } from "src/app/data/matches";

@Component({
  selector: "app-stadium-table",
  templateUrl: "./stadium-table.component.html",
  styleUrls: ["./stadium-table.component.css"],
})
export class StadiumTableComponent implements OnInit {
  t = JSON.parse(localStorage.getItem("stadiums") || "[]");
  constructor(private router: Router) {}

  ngOnInit() {}

  display(x) {
    this.router.navigate([`stadiuminfo/${x}`]);
  }
  edit(x) {
    localStorage.setItem("idstadium", JSON.stringify(x));
    this.router.navigate(["editstadium"]);
  }
  delete(x) {
    for (let i = 0; i < this.t.length; i++) {
      if (x == this.t[i].id) {
        this.t.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("stadiums", JSON.stringify(this.t));
  }
}
