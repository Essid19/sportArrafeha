import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculeimcService {
  imcURL = "http://localhost:3000/imc";
  constructor(private http: HttpClient) {}
  addImc(obj) {
    return this.http.post<{ msg: string; chaine: string }>(this.imcURL, obj);
  }
}
