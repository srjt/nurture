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
    }
    NurtureRouter.prototype.navigateToMainRoute = function (menuItem, options) {
        if (options === void 0) { options = {}; }
        this._navItemSource.next(menuItem);
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                this.routerExtensions.navigate(["/marketplace"], options);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
        }
    };
    NurtureRouter.prototype.navigateDashboard = function (menuItem, link) {
        this._navItemSource.next(menuItem);
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.DashboardMenu.Browse:
                this.routerExtensions.navigate(["/browse", link]);
                break;
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