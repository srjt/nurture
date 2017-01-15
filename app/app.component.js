"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("./shared/user/user.service");
var pagetitle_service_1 = require("./shared/navigation/pagetitle.service");
var nurturerouter_service_1 = require("./shared/navigation/nurturerouter.service");
var _ = require("lodash");
var AppComponent = (function () {
    function AppComponent(userService, pageTitle, nurtureRouter) {
        this.userService = userService;
        this.pageTitle = pageTitle;
        this.nurtureRouter = nurtureRouter;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.nurtureRouter.navItem$
            .subscribe(function (menuItem) {
            _this.setPageTitleVisibility(menuItem);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.setPageTitleVisibility = function (menuItem) {
        var pageTitle = this.pageTitle.getMainMenuTitle(menuItem);
        var pageTitleStackLayout = this.pageTitleComponent.nativeElement;
        console.log("page title is " + pageTitle);
        if (_.isEmpty(pageTitle)) {
            pageTitleStackLayout.visibility = 'collapse';
        }
        else {
            pageTitleStackLayout.visibility = 'visible';
        }
    };
    __decorate([
        core_1.ViewChild("pageTitleComponent"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "pageTitleComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            templateUrl: "app.html",
            styleUrls: ["/app.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, pagetitle_service_1.PageTitle, nurturerouter_service_1.NurtureRouter])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map