import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userURL = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get<{ users: any }>(this.userURL);
  }
  login(obj) {
    return this.http.post<{ user: any; msg: string }>(
      this.userURL + "/login",
      obj
    );
  }
  signup(obj: any, img: File) {
    let fdata = new FormData();
    fdata.append("img", img);
    fdata.append("firstName", obj.firstName);
    fdata.append("lastName", obj.lastName);
    fdata.append("email", obj.email);
    fdata.append("pwd", obj.pwd);
    fdata.append("tel", obj.tel);
    fdata.append("role", obj.role);
    return this.http.post<{ msg: string }>(this.userURL + "/signup", fdata);
  }
}
