"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var httpRequest = require("http/http-request");
var config_1 = require("../config");
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.load = function (pageNo) {
        pageNo = pageNo || 1;
        // console.log("API " + Config.apiUrlDashboard + "?pageNo=" + pageNo);
        return this.http.get(config_1.Config.apiUrlDashboard + "?pageNo=" + pageNo + "&pageSize=6", this.getHeaders())
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    DashboardService.prototype.loadThumbnail = function (thumbnailUrl) {
        return new Promise(function (resolve, reject) {
            httpRequest.request({ url: thumbnailUrl, method: "GET" })
                .then(function (res) {
                if (res.statusCode === 301) {
                    thumbnailUrl = res.headers["Location"];
                    httpRequest.request({ url: thumbnailUrl, method: "GET" })
                        .then(function (res) {
                        res.content.toImage().then(function (resImg) {
                            resolve(resImg);
                        }, function (err) { reject(err); });
                    }, function (err) {
                        console.log("errored again pic " + err);
                        reject(err);
                    });
                }
                else {
                    //console.log("loaded pic " + thumbnailUrl);
                    res.content.toImage().then(function (resImg) {
                        resolve(resImg);
                    }, function (err) { reject(err); });
                }
            }, function (err) {
                console.log("errored pic " + err);
                reject(err);
            });
        });
    };
    DashboardService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return { headers: headers };
    };
    DashboardService.prototype.handleErrors = function (error) {
        console.log(error);
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