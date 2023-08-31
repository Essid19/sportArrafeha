import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  playerURL = "http://localhost:3000/players";
  constructor(private http: HttpClient) {}
  getAllPlayer() {
    return this.http.get<{ players: any }>(this.playerURL);
  }
  getPlayerById(id) {
    // 2 Solution
    // return this.http.get(this.playerURL + "/" + id);
    return this.http.get<{ player: any }>(`${this.playerURL}/${id}`);
  }

  addPlayer(obj) {
    return this.http.post<{ message: string; isAdded: boolean }>(
      this.playerURL,
      obj
    );
  }
  // requeste to delete player by id
  deletePlayer(id) {
    return this.http.delete<{ msg: string }>(this.playerURL + "/" + id);
  }
  // requeste to edit player
  updatePlayer(obj) {
    return this.http.put<{ msg: string }>(this.playerURL, obj);
  }
}
