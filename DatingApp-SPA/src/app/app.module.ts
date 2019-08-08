import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthService } from "./_services/auth.service";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ErrorInterceptorProvide } from "./_services/error.interceptor";
import { AlertifyService } from "./_services/alertify.service";
import { BsDropdownModule } from "ngx-bootstrap";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListComponent } from "./list/list.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";
import { AuthGuard } from "./_guards/auth.guard";
import { UserService } from "./_services/user.service";
import { MemberCardComponent } from "./members/member-card/member-card.component";

export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    MemberListComponent,
    ListComponent,
    MessagesComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    ErrorInterceptorProvide,
    AuthService,
    AlertifyService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
