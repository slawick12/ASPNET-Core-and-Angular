import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { Router } from "@angular/router";
import { User } from '../_moduls/user';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() user:User;
  
  model: any = {};

  constructor(
    public authSevice: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authSevice.login(this.model).subscribe(
      next => {
        this.alertify.success("Logged in successfully");
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }
  loggedIn() {
    return this.authSevice.loggedIn();
  }
  logout() {
    localStorage.removeItem("token");
    this.alertify.message("logged out");
    this.router.navigate(['/home'])
  }
}
