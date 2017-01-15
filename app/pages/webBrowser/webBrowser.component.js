"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var pagetitle_service_1 = require("../../shared/navigation/pagetitle.service");
var WebBrowserComponent = (function () {
    function WebBrowserComponent(activatedRoute, pageTitle) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.pageTitle = pageTitle;
        this.activatedRoute.params
            .forEach(function (params) { _this.url = params['url']; });
    }
    WebBrowserComponent.prototype.ngOnInit = function () {
        var webView = this.webView.nativeElement;
        webView.url = this.url;
    };
    __decorate([
        core_1.ViewChild("webView"), 
        __metadata('design:type', core_1.ElementRef)
    ], WebBrowserComponent.prototype, "webView", void 0);
    WebBrowserComponent = __decorate([
        core_1.Component({
            selector: "web-browser",
            templateUrl: "pages/webBrowser/webBrowser.html",
            styleUrls: ["pages/webBrowser/webBrowser.css"],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pagetitle_service_1.PageTitle])
    ], WebBrowserComponent);
    return WebBrowserComponent;
}());
exports.WebBrowserComponent = WebBrowserComponent;
//# sourceMappingURL=webBrowser.component.js.map