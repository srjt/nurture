"use strict";
var application = require("application");
var dashboard_service_1 = require("../../shared/dashboard/dashboard.service");
var nurturerouter_service_1 = require("../../shared/navigation/nurturerouter.service");
var nurture_enums_1 = require("../../shared/navigation/nurture.enums");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var imageSource = require("image-source");
var DashboardItemComponent = (function () {
    function DashboardItemComponent(dashboardService, nurtureRouter, page) {
        this.dashboardService = dashboardService;
        this.nurtureRouter = nurtureRouter;
        this.page = page;
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
    };
    DashboardItemComponent.prototype.ngOnChanges = function () {
        if (!this.data.thumbnailPic) {
            this.loadImage();
        }
    };
    DashboardItemComponent.prototype.browseLink = function () {
        this.nurtureRouter.navigateDashboard(nurture_enums_1.NurtureEnums.DashboardMenu.Browse, this.data.link);
    };
    DashboardItemComponent.prototype.loadImage = function () {
        var _this = this;
        var thumbnailImage = this.thumbnailImage.nativeElement;
        thumbnailImage.imageSource = null;
        if (application.android) {
            this.dashboardService.loadThumbnail(this.data.thumbnail)
                .then(function (img) {
                thumbnailImage.imageSource = img;
            }, function (err) {
                console.log(err + " URL " + _this.data.thumbnail);
                thumbnailImage.imageSource = imageSource.fromResource("bg_login");
            });
        }
        else {
            imageSource.fromUrl(this.data.thumbnail)
                .then(function (res) {
                thumbnailImage.imageSource = res;
            }, function (err) {
                console.log(err + " URL " + _this.data.thumbnail);
                thumbnailImage.imageSource = imageSource.fromResource("bg_login");
            });
        }
    };
    __decorate([
        core_1.ViewChild("thumbnailImage"), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardItemComponent.prototype, "thumbnailImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DashboardItemComponent.prototype, "data", void 0);
    DashboardItemComponent = __decorate([
        core_1.Component({
            selector: "dashboard-item",
            providers: [dashboard_service_1.DashboardService],
            templateUrl: "pages/dashboard/dashboardItem.html",
            styleUrls: ["pages/dashboard/dashboardItem-common.css"],
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService, nurturerouter_service_1.NurtureRouter, page_1.Page])
    ], DashboardItemComponent);
    return DashboardItemComponent;
}());
exports.DashboardItemComponent = DashboardItemComponent;
//# sourceMappingURL=dashboardItem.component.js.map