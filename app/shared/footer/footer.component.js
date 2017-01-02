"use strict";
var user_service_1 = require("../../shared/user/user.service");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var imageSource = require("image-source");
var FooterComponent = (function () {
    function FooterComponent(routerExtensions, userService) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        console.log("onit footer");
        this.navigate("dashboard");
    };
    FooterComponent.prototype.navigate = function (pg) {
        console.log("Navigating to " + pg);
        this.selectIcon(pg);
        switch (pg) {
            case "dashboard":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case "marketplace":
                this.routerExtensions.navigate(["/marketplace"]);
                break;
            case "tools":
                this.routerExtensions.navigate([""]);
                break;
            case "analysis":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case "settings":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
        }
    };
    FooterComponent.prototype.selectIcon = function (pg) {
        this.unSelectAll();
        switch (pg) {
            case "dashboard":
                var dashboard = this.dashboard.nativeElement;
                dashboard.imageSource = imageSource.fromResource("dashboard_selected");
                break;
            case "marketplace":
                var marketplace = this.marketplace.nativeElement;
                marketplace.imageSource = imageSource.fromResource("marketplace_selected");
                break;
            case "tools":
                var tools = this.tools.nativeElement;
                tools.imageSource = imageSource.fromResource("tools_selected");
                break;
            case "analysis":
                var analysis = this.analysis.nativeElement;
                analysis.imageSource = imageSource.fromResource("analysis_selected");
                break;
            case "settings":
                var settings = this.settings.nativeElement;
                settings.imageSource = imageSource.fromResource("settings_selected");
                break;
        }
    };
    FooterComponent.prototype.unSelectAll = function () {
        var dashboard = this.dashboard.nativeElement;
        dashboard.imageSource = imageSource.fromResource("dashboard");
        var marketplace = this.marketplace.nativeElement;
        marketplace.imageSource = imageSource.fromResource("marketplace");
        var tools = this.tools.nativeElement;
        tools.imageSource = imageSource.fromResource("tools");
        var analysis = this.analysis.nativeElement;
        analysis.imageSource = imageSource.fromResource("analysis");
        var settings = this.settings.nativeElement;
        settings.imageSource = imageSource.fromResource("settings");
    };
    __decorate([
        core_1.ViewChild("dashboard"), 
        __metadata('design:type', core_1.ElementRef)
    ], FooterComponent.prototype, "dashboard", void 0);
    __decorate([
        core_1.ViewChild("marketplace"), 
        __metadata('design:type', core_1.ElementRef)
    ], FooterComponent.prototype, "marketplace", void 0);
    __decorate([
        core_1.ViewChild("tools"), 
        __metadata('design:type', core_1.ElementRef)
    ], FooterComponent.prototype, "tools", void 0);
    __decorate([
        core_1.ViewChild("analysis"), 
        __metadata('design:type', core_1.ElementRef)
    ], FooterComponent.prototype, "analysis", void 0);
    __decorate([
        core_1.ViewChild("settings"), 
        __metadata('design:type', core_1.ElementRef)
    ], FooterComponent.prototype, "settings", void 0);
    FooterComponent = __decorate([
        core_1.Component({
            selector: "footer",
            providers: [user_service_1.UserService],
            templateUrl: "shared/footer/footer.html",
            styleUrls: ["shared/footer/footer-common.css", "shared/footer/footer.css"]
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, user_service_1.UserService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map