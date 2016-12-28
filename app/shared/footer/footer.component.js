"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var FooterComponent = (function () {
    function FooterComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    FooterComponent.prototype.navigate = function (pg) {
        console.log('Navigating to ' + pg);
        if (pg === 'home') {
            this.routerExtensions.navigate(["/dashboard"]);
        }
        else {
            var url = "www.google.com";
            this.routerExtensions.navigate(["/browse", url]);
        }
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer',
            templateUrl: 'shared/footer/footer.html',
            styleUrls: ['shared/footer/footer-common.css']
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map