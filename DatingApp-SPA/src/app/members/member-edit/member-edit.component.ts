import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/_moduls/user";
import { AlertifyService } from "src/app/_services/alertify.service";
import { NgForm } from "@angular/forms";
import { Hosted } from 'protractor/built/driverProviders';

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"]
})
export class MemberEditComponent implements OnInit {
  @ViewChild("editForm", {static: true}) editForm: NgForm;
  @HostListener('window:beforeunload', ["$event"])
  unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue =true;
    }
  }

  user: User;

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }
  updateUser() {
    console.log(this.user);
    this.alertify.success("Updated successfully");
    this.editForm.reset(this.user);
  }
}
