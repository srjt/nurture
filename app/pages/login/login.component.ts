import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {

  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;
  user: User;
  isLoggingIn = true;
 
 
  constructor(private routerExtensions: RouterExtensions, private userService: UserService, private page: Page) {
    this.user = new User();

    //TODO: test code
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    this.page.backgroundSpanUnderStatusBar = true;
    
    //TODO: test code
    this.login(); 
  }
  submit() {
    if(!this.user.isValidEmail()){
      alert("Enter a valid email address");
      return;
    }
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    this.userService.login(this.user)
      .subscribe(
        () => this.routerExtensions.navigate(["/dashboard"], { clearHistory: true }),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}