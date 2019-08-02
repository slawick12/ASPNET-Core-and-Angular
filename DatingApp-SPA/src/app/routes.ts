import { Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListComponent } from "./list/list.component";
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "members", component: MemberListComponent, canActivate:[AuthGuard] },
  { path: "messages", component: MessagesComponent },
  { path: "list", component: ListComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
