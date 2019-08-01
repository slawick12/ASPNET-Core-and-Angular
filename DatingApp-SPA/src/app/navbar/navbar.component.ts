import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(private authSevice: AuthService, private alertify : AlertifyService) {}

  ngOnInit() {}

  login() {
    this.authSevice.login(this.model).subscribe(
      next => {
        this.alertify.success("Logged in successfully");
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
  logout() {
    localStorage.removeItem("token");
    this.alertify.message("logged out");
  }
}
