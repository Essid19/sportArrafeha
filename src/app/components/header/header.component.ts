import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { decodeToken } from "src/app/data/matches";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  user;

  data;

  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate([""]);
  }
  isLoggedIn() {
    const jwt = sessionStorage.getItem("token");
    if (jwt) {
      this.user = decodeToken(jwt);
    }
    return !!jwt;
  }
}
