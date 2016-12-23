"use strict";
var _ = require("lodash");
var dashboard_service_1 = require("../../shared/dashboard/dashboard.service");
var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, page) {
        this.dashboardService = dashboardService;
        this.page = page;
        this.data = new observableArrayModule.ObservableArray([]);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dvScrollView = this.dashboardScrollView.nativeElement;
        this.currentPage = 1;
        this.loading = false;
        var onScroll = _.throttle(function () {
            _this.currentPage++;
            _this.load(null, _this.currentPage);
        }, 1000, { 'trailing': true });
        dvScrollView.on('scroll', function (data) {
            if ((dvScrollView.scrollableHeight - dvScrollView.verticalOffset) <= 0 && !_this.loading) {
                onScroll();
            }
        });
        this.load(null, this.currentPage);
    };
    DashboardComponent.prototype.refreshList = function (args) {
        var _this = this;
        _.throttle(function () {
            _this.load(args, 1);
        }, 2000)();
    };
    DashboardComponent.prototype.load = function (args, pageNo) {
        var _this = this;
        this.loading = true;
        this.dashboardService.load(pageNo).subscribe(function (res) {
            for (var i = res.data.length - 1; i >= 0; i--) {
                var oItem = new observable.Observable(res.data[i]);
                var exists = false;
                for (var j = _this.data.length - 1; j >= 0; j--) {
                    console.log(JSON.stringify(_this.data[j]));
                    if (_this.data[j] == res.data[i]) {
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
            if (args) {
                _this.loading = args.object.refreshing = false;
            }
        });
    };
    __decorate([
        core_1.ViewChild("dashboardScrollView"), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardComponent.prototype, "dashboardScrollView", void 0);
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