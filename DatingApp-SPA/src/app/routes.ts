import { Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListComponent } from "./list/list.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDatailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDatailResolver }
      },
      { path: "messages", component: MessagesComponent },
      { path: "list", component: ListComponent }
    ]
  },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
