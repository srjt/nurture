"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var WebBrowserComponent = (function () {
    function WebBrowserComponent(pageRoute) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
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
            providers: [],
            templateUrl: "pages/webBrowser/webBrowser.html",
            styleUrls: ["pages/webBrowser/webBrowser-common.css"],
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.PageRoute])
    ], WebBrowserComponent);
    return WebBrowserComponent;
}());
exports.WebBrowserComponent = WebBrowserComponent;
//# sourceMappingURL=webBrowser.component.js.map