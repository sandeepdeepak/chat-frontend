import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  loginService(postData) {
    return this.http.post("http://localhost:3000/users/login", postData);
  }
}
