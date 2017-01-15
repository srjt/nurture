"use strict";
var _ = require("lodash");
var core_1 = require("@angular/core");
var pagetitle_service_1 = require("../../shared/navigation/pagetitle.service");
var MarketplaceComponent = (function () {
    function MarketplaceComponent(pageTitle) {
        this.pageTitle = pageTitle;
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
    };
    MarketplaceComponent.prototype.refreshList = function (args) {
    };
    MarketplaceComponent.prototype.load = function (args, pageNo) {
    };
    __decorate([
        core_1.ViewChild("marketplaceListView"), 
        __metadata('design:type', core_1.ElementRef)
    ], MarketplaceComponent.prototype, "marketplaceListView", void 0);
    __decorate([
        core_1.ViewChild("pullToRefresh"), 
        __metadata('design:type', core_1.ElementRef)
    ], MarketplaceComponent.prototype, "pullToRefresh", void 0);
    MarketplaceComponent = __decorate([
        core_1.Component({
            selector: "marketplace",
            providers: [],
            templateUrl: "pages/marketplace/marketplace.html",
            styleUrls: ["pages/marketplace/marketplace-common.css", "pages/marketplace/marketplace.css"],
        }), 
        __metadata('design:paramtypes', [pagetitle_service_1.PageTitle])
    ], MarketplaceComponent);
    return MarketplaceComponent;
}());
exports.MarketplaceComponent = MarketplaceComponent;
//# sourceMappingURL=marketplace.component.js.map