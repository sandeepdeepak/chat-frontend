import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { LoginModel } from "./login.model";
import { MatSnackBar } from "@angular/material";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginModel = new LoginModel();
  signText = 'Sign up';
  constructor(
    private loginServ: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() { }

  login() {
    this.loginServ.loginService(this.loginModel).subscribe((res: any) => {
      console.log(res);
      this.openSnackBar("Logged in Successfully", "Dismiss", 3000);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.cookieService.set('SESSIONID',res.token);
      this.router.navigate(['/chat-page']);
    });
  }

  signup() {
    this.loginServ.signupService(this.loginModel).subscribe(res => {
      console.log(res);
      this.openSnackBar("Sign up successfully", "Dismiss", 3000);
    });
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: "center"
      // verticalPosition: "top"
    });
  }

  changeSignText() {
    if (this.signText == 'Sign up') {
      this.signText = 'Sign in'
    }
    else {
      this.signText = 'Sign up'
    }
  }
}
