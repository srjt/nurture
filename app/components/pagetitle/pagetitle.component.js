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
        var _this = this;
        this.subscription = this.nurtureRouter.navItem$
            .subscribe(function (item) {
            _this.setPageTitle(_this.nurtureRouter.getMainMenuTitle(item));
        });
    };
    PageTitleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PageTitleComponent.prototype.setPageTitle = function (title) {
        var pageTitleElem = this.pageTitle.nativeElement;
        pageTitleElem.text = title;
    };
    __decorate([
        core_1.ViewChild("pageTitle"), 
        __metadata('design:type', core_1.ElementRef)
    ], PageTitleComponent.prototype, "pageTitle", void 0);
    PageTitleComponent = __decorate([
        core_1.Component({
            selector: "page-title",
            templateUrl: "components/pagetitle/pagetitle.html",
            styleUrls: ["components/pagetitle/pagetitle-common.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, nurturerouter_service_1.NurtureRouter])
    ], PageTitleComponent);
    return PageTitleComponent;
}());
exports.PageTitleComponent = PageTitleComponent;
//# sourceMappingURL=pagetitle.component.js.map