"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var fetchModule = require("fetch");
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.load = function (pageNo) {
        console.log("loading.. Pg " + pageNo);
        pageNo = pageNo || 1;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log("API " + config_1.Config.apiUrlDashboard + "?pageNo=" + pageNo);
        return this.http.get(config_1.Config.apiUrlDashboard + "?pageNo=" + pageNo, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    DashboardService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    DashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map