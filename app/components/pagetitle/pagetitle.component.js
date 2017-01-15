"use strict";
var user_service_1 = require("../../shared/user/user.service");
var nurturerouter_service_1 = require("../../shared/navigation/nurturerouter.service");
var core_1 = require("@angular/core");
var pagetitle_service_1 = require("../../shared/navigation/pagetitle.service");
var PageTitleComponent = (function () {
    function PageTitleComponent(userService, nurtureRouter, pageTitle) {
        this.userService = userService;
        this.nurtureRouter = nurtureRouter;
        this.pageTitle = pageTitle;
    }
    PageTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.nurtureRouter.navItem$
            .subscribe(function (item) {
            _this.setPageTitle(_this.pageTitle.getMainMenuTitle(item));
        });
    };
    PageTitleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PageTitleComponent.prototype.setPageTitle = function (title) {
        var pageTitleElem = this.pageTitleLabel.nativeElement;
        pageTitleElem.text = title;
    };
    __decorate([
        core_1.ViewChild("pageTitle"), 
        __metadata('design:type', core_1.ElementRef)
    ], PageTitleComponent.prototype, "pageTitleLabel", void 0);
    PageTitleComponent = __decorate([
        core_1.Component({
            selector: "page-title",
            templateUrl: "components/pagetitle/pagetitle.html",
            styleUrls: ["components/pagetitle/pagetitle-common.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, nurturerouter_service_1.NurtureRouter, pagetitle_service_1.PageTitle])
    ], PageTitleComponent);
    return PageTitleComponent;
}());
exports.PageTitleComponent = PageTitleComponent;
//# sourceMappingURL=pagetitle.component.js.map