"use strict";
var dashboard_service_1 = require("../../shared/dashboard/dashboard.service");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, page) {
        this.dashboardService = dashboardService;
        this.page = page;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.load().subscribe(function (res) {
            _this.data = res.data;
            console.log('Dashboard response ' + JSON.stringify(res.data));
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