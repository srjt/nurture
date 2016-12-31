"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var WebBrowserComponent = (function () {
    function WebBrowserComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
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
            providers: [],
            templateUrl: "pages/webBrowser/webBrowser.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], WebBrowserComponent);
    return WebBrowserComponent;
}());
exports.WebBrowserComponent = WebBrowserComponent;
//# sourceMappingURL=webBrowser.component.js.map