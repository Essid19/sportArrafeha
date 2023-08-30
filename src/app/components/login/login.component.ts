import { Router } from "@angular/router";
import { teams } from "./../../data/matches";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import jwt_decode from "jwt-decode";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // definie un objet user
  msg = "";
  Login = "Login";
  user = {};
  loginForm: FormGroup;
  constructor(private userservice: UserService, private router: Router) {}
  ngOnInit() {}
  login() {
    alert("login clicked");

    this.userservice.login(this.user).subscribe((data) => {
      console.log("here data after login", data);
      if (data.user) {
        sessionStorage.setItem("token", data.user);
        let dToken: any = this.decodeToken(data.user);
        console.log(dToken);
        if (dToken.userconnected.role === "admin") {
          this.router.navigate(["admin"]);
        } else {
          this.router.navigate([""]);
        }
      }
      // if (data.user) {
      //   if (data.user.role == "admin") {
      //     localStorage.setItem("iduser", data.user.id);
      //     this.router.navigate(["admin"]);
      //   } else {
      //     localStorage.setItem("iduser", data.user.id);
      //     this.router.navigate([""]);
      //   }
      // } else {
      //   this.msg = "please check Email/Pwd";
      // }
    });
  }
  decodeToken(token: string) {
    return jwt_decode(token);
  }
}
