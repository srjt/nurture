"use strict";
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var nurturerouter_service_1 = require("../../shared/navigation/nurturerouter.service");
var nurture_enums_1 = require("../../shared/navigation/nurture.enums");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var tnsOAuthModule = require('nativescript-oauth');
var config_1 = require("../../shared/config");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, userService, page, nurtureRouter) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.page = page;
        this.nurtureRouter = nurtureRouter;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        //TODO: test code
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
        this.page.backgroundSpanUnderStatusBar = true;
        if (this.userService.isLoggedIn()) {
            this.onLoginSuccess();
        }
        else {
        }
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.onLoginSuccess(); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.loginFacebook = function () {
        var _this = this;
        tnsOAuthModule.login()
            .then(function () {
            config_1.Config.token = tnsOAuthModule.accessToken();
            _this.onLoginSuccess();
        })
            .catch(function (err) {
            console.log("ERROR");
            console.log(err);
        });
    };
    //TODO: replace this code with own registration api
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.onLoginSuccess = function () {
        this.nurtureRouter.navigateToMainRoute(nurture_enums_1.NurtureEnums.MainMenu.Dashboard, { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, user_service_1.UserService, page_1.Page, nurturerouter_service_1.NurtureRouter])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map