"use strict";
var user_service_1 = require("../../shared/user/user.service");
var nurturerouter_service_1 = require("../../shared/navigation/nurturerouter.service");
var core_1 = require("@angular/core");
var PageTitleComponent = (function () {
    function PageTitleComponent(userService, nurtureRouter) {
        this.userService = userService;
        this.nurtureRouter = nurtureRouter;
    }
    PageTitleComponent.prototype.ngOnInit = function () {
    };
    PageTitleComponent = __decorate([
        core_1.Component({
            selector: "page-title",
            providers: [user_service_1.UserService, nurturerouter_service_1.NurtureRouter],
            templateUrl: "components/pagetitle/pagetitle.html",
            styleUrls: ["components/pagetitle/pagetitle-common.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, nurturerouter_service_1.NurtureRouter])
    ], PageTitleComponent);
    return PageTitleComponent;
}());
exports.PageTitleComponent = PageTitleComponent;
//# sourceMappingURL=pagetitle.component.js.map