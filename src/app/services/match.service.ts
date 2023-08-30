import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  matchURL = "http://localhost:3000/matches";
  constructor(private http: HttpClient) {}
  // requeste to get all matches
  getAllMatch() {
    return this.http.get<{ matches: any }>(this.matchURL);
  }
  getMatchById(id: any) {
    return this.http.get<{ match: any; msg: string }>(`${this.matchURL}/${id}`);
  }

  addMatch(obj) {
    return this.http.post<{ msg: string }>(this.matchURL, obj);
  }
  // requeste to delete match by id
  deleteMatch(id) {
    return this.http.delete<{ msg: string }>(this.matchURL + "/" + id);
  }
  // requeste to edit match
  updateMatch(obj) {
    return this.http.put<{ msg: string }>(this.matchURL, obj);
  }
}
