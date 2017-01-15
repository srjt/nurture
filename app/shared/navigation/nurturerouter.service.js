"use strict";
var nurture_enums_1 = require("./nurture.enums");
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var NurtureRouter = (function () {
    function NurtureRouter(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this._navItemSource = new BehaviorSubject_1.BehaviorSubject(0);
        this.navItem$ = this._navItemSource.asObservable();
        this.navigateToMainRoute(nurture_enums_1.NurtureEnums.MainMenu.Dashboard);
    }
    NurtureRouter.prototype.navigateToMainRoute = function (menuItem) {
        this._navItemSource.next(menuItem);
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                this.routerExtensions.navigate(["/marketplace"]);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
        }
    };
    NurtureRouter.prototype.getMainMenuTitle = function (menuItem) {
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                return "Dashboard";
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                return "Marketplace";
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                return "Tools";
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                return "Analysis";
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                return "Settings";
        }
    };
    NurtureRouter = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], NurtureRouter);
    return NurtureRouter;
}());
exports.NurtureRouter = NurtureRouter;
//# sourceMappingURL=nurturerouter.service.js.map