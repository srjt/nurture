"use strict";
var dashboard_service_1 = require("../../shared/dashboard/dashboard.service");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, page) {
        this.dashboardService = dashboardService;
        this.page = page;
        this.data = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.load(null);
    };
    DashboardComponent.prototype.refreshList = function (args) {
        console.log(args[0]);
        this.load(args);
    };
    DashboardComponent.prototype.load = function (args) {
        var _this = this;
        console.log('reloading dashboard');
        this.dashboardService.load().subscribe(function (res) {
            _this.data = res.data;
            if (args) {
                console.log('finish loading...');
                args.object.refreshing = false;
            }
        }, function () {
            if (args) {
                args.object.refreshing = false;
            }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            providers: [dashboard_service_1.DashboardService],
            templateUrl: "pages/dashboard/dashboard.html",
            styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"],
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService, page_1.Page])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map