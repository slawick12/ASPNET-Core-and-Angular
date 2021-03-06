import { Injectable } from "@angular/core";
import { User } from "../_moduls/user";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable()
export class MemberDatailResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private route: Router,
    private alertify: AlertifyService
  ) {}
 
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    console.log(this.userService.getUser(route.params["id"]))
    return this.userService.getUser(route.params["id"]).pipe(
      catchError(error => {
        this.alertify.error("Problem retrieving data");
        this.route.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
