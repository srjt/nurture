"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.apiUrlDashboard, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    DashboardService.prototype.handleErrors = function (error) {
        //console.log(JSON.stringify(error.json()));
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