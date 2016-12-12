"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var DashboardItemComponent = (function () {
    function DashboardItemComponent(page) {
        this.page = page;
        this.data = {};
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
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
        __metadata('design:paramtypes', [page_1.Page])
    ], DashboardItemComponent);
    return DashboardItemComponent;
}());
exports.DashboardItemComponent = DashboardItemComponent;
//# sourceMappingURL=dashboardItem.component.js.map