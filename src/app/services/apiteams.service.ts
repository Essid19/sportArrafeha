import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiteamsService {
  teamsURL = "http://localhost:3000/apiteams";
  constructor(private http: HttpClient) {}
  sarch(obj) {
    return this.http.post<{ obj: any; msg: string }>(this.teamsURL, obj);
  }
}
