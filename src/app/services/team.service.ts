import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  teamURL = "http://localhost:3000/teams";
  constructor(private http: HttpClient) {}
  // requeste to get all matches
  getAllTeam() {
    return this.http.get<{ teams: any }>(this.teamURL);
  }
  getTeamById(id) {
    // 2 Solution
    // return this.http.get(this.teamURL + "/" + id);
    return this.http.get<{ team: any; msg: string }>(`${this.teamURL}/${id}`);
  }

  addTeam(obj) {
    return this.http.post<{ msg: string }>(this.teamURL, obj);
  }
  // requeste to delete match by id
  deleteTeam(id) {
    return this.http.delete<{ msg: string }>(`${this.teamURL}/${id}`);
  }
  // requeste to edit match
  updateTeam(obj) {
    return this.http.put<{ msg: string }>(this.teamURL, obj);
  }
}
