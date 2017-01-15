import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { NurtureRouter } from "../../shared/navigation/nurturerouter.service";
import { NurtureEnums } from "../../shared/navigation/nurture.enums";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as tnsOAuthModule from 'nativescript-oauth';
import { Config } from "../../shared/config";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {

  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;
  user: User;
  isLoggingIn = true;

  constructor(private routerExtensions: RouterExtensions,
    private userService: UserService,
    private page: Page,
    private nurtureRouter: NurtureRouter) {
    this.user = new User();

    //TODO: test code
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    this.page.backgroundSpanUnderStatusBar = true;

    if (this.userService.isLoggedIn()) {
      this.onLoginSuccess();
    } else {
      //TODO: test code
      // this.login();
    }
  }
  submit() {
    if (!this.user.isValidEmail()) {
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
      () => this.onLoginSuccess(),
      (error) => alert("Unfortunately we could not find your account.")
      );
  }
  loginFacebook() {
    tnsOAuthModule.login()
      .then(() => {
        Config.token = tnsOAuthModule.accessToken();
        this.onLoginSuccess();
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  }
  //TODO: replace this code with own registration api
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
  onLoginSuccess() {
    this.nurtureRouter.navigateToMainRoute(NurtureEnums.MainMenu.Dashboard, {clearHistory: true});
  }
}