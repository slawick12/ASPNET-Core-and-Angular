import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = "http://localhost:5000/api/auth/" ;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.post(this.baseUrl + 'login', model)
      .pipe( )
  }
}
