import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { LoginModel } from "./login.model";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginModel = new LoginModel();
  constructor(
    private loginServ: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  login() {
    this.loginServ.loginService(this.loginModel).subscribe(res => {
      console.log(res);
      this.openSnackBar("Logged in Successfully", "Dismiss", 3000);
    });
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: "center"
      // verticalPosition: "top"
    });
  }
}
