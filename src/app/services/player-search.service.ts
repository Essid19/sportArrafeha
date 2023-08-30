import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlayerSearchService {
  constructor(private http: HttpClient) {}
  playersearch = "http://localhost:3000/playersearch";
  getPlayers(obj) {
    // 2 Solution
    // return this.http.get(this.playerURL + "/" + id);
    return this.http.post<{ player: any; msg: string }>(this.playersearch, obj);
  }
}
