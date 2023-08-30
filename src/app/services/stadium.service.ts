import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StadiumService {
  stadiumURL = "http//localhost:3000/stadiums";
  constructor(private http: HttpClient) {}
  // requeste to get all matches
  getAllStadium() {
    return this.http.get(this.stadiumURL);
  }
  getStadiumById(id) {
    // 2 Solution
    // return this.http.get(this.stadiumURL + "/" + id);
    return this.http.get(`$ {this.stadiumURL}/${id}`);
  }

  addStadium(obj) {
    return this.http.post(this.stadiumURL, obj);
  }
  // requeste to delete match by id
  deleteStadiumr(id) {
    return this.http.delete(this.stadiumURL + "/" + id);
  }
  // requeste to edit match
  updateStadium(obj) {
    return this.http.put(this.stadiumURL, obj);
  }
}
