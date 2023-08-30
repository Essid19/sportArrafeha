import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  weatherURL = "http://localhost:3000/weather";
  constructor(private http: HttpClient) {}
  sarchweather(obj) {
    return this.http.post<{ obj: any; msg: string }>(this.weatherURL, obj);
  }
}
