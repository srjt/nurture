"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var imageSource = require("image-source");
var DashboardItemComponent = (function () {
    function DashboardItemComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
        this.loadImage();
    };
    DashboardItemComponent.prototype.browseLink = function () {
        this.routerExtensions.navigate(["/browse", this.data.url]);
    };
    DashboardItemComponent.prototype.loadImage = function () {
        var _this = this;
        imageSource.fromUrl(this.data.picUrl)
            .then(function (res) {
            _this.thumbnailPic = res;
        }, function (error) {
            console.log(error);
            _this.thumbnailPic = imageSource.fromResource("bg_login");
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DashboardItemComponent.prototype, "data", void 0);
    DashboardItemComponent = __decorate([
        core_1.Component({
            selector: "dashboard-item",
            providers: [],
            templateUrl: "pages/dashboard/dashboardItem.html",
            styleUrls: ["pages/dashboard/dashboardItem-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, page_1.Page])
    ], DashboardItemComponent);
    return DashboardItemComponent;
}());
exports.DashboardItemComponent = DashboardItemComponent;
//# sourceMappingURL=dashboardItem.component.js.map