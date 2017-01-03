"use strict";
var dashboard_service_1 = require("../../shared/dashboard/dashboard.service");
var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var list_view_1 = require("ui/list-view");
var element_registry_1 = require("nativescript-angular/element-registry");
var _ = require("lodash");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, page) {
        this.dashboardService = dashboardService;
        this.page = page;
        this.data = new observableArrayModule.ObservableArray([]);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dvListView = this.dashboardListView.nativeElement;
        this.currentPage = 1;
        this.loading = false;
        dvListView.addEventListener(list_view_1.ListView.loadMoreItemsEvent, function (data) {
            _this.load(null, ++_this.currentPage);
        });
        this.load(null, this.currentPage);
    };
    DashboardComponent.prototype.refreshList = function (args) {
        var _this = this;
        console.log("refreshList");
        _.throttle(function () {
            if (!_this.loading) {
                _this.load(args, 1);
            }
        }, 1000)();
    };
    DashboardComponent.prototype.load = function (args, pageNo) {
        var _this = this;
        this.loading = true;
        this.dashboardService.load(pageNo).subscribe(function (res) {
            for (var i = res.data.length - 1; i >= 0; i--) {
                var oItem = new observable.Observable(res.data[i]);
                var exists = false;
                if (_this.data)
                    for (var j = _this.data.length - 1; j >= 0; j--) {
                        if (_this.data.getItem(j).get("_id") == oItem.get("_id")) {
                            exists = true;
                            break;
                        }
                    }
                if (!exists) {
                    if (pageNo == 1) {
                        _this.data.unshift(oItem);
                    }
                    else {
                        _this.data.push(oItem);
                    }
                }
            }
            _this.loading = false;
            if (args) {
                args.object.refreshing = false;
            }
        }, function () {
            _this.loading = false;
            if (args) {
                args.object.refreshing = false;
            }
        });
    };
    __decorate([
        core_1.ViewChild("dashboardListView"), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardComponent.prototype, "dashboardListView", void 0);
    __decorate([
        core_1.ViewChild("pullToRefresh"), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardComponent.prototype, "pullToRefresh", void 0);
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