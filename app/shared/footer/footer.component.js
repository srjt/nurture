"use strict";
var user_service_1 = require("../../shared/user/user.service");
var nurture_enums_1 = require("../../shared/navigation/nurture.enums");
var nurturerouter_service_1 = require("../../shared/navigation/nurturerouter.service");
var core_1 = require("@angular/core");
var imageSource = require("image-source");
var buttonModule = require("ui/button");
var FooterComponent = (function () {
    function FooterComponent(nurtureRoutre, userService) {
        this.nurtureRoutre = nurtureRoutre;
        this.userService = userService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dashboard = this.dashboard.nativeElement;
        dashboard.addEventListener(buttonModule.Button.tapEvent, function (data) {
            _this.navigate(nurture_enums_1.NurtureEnums.MainMenu.Dashboard);
        }, this);
        var marketplace = this.marketplace.nativeElement;
        marketplace.addEventListener(buttonModule.Button.tapEvent, function (data) {
            _this.navigate(nurture_enums_1.NurtureEnums.MainMenu.Marketplace);
        }, this);
        var tools = this.tools.nativeElement;
        tools.addEventListener(buttonModule.Button.tapEvent, function (data) {
            _this.navigate(nurture_enums_1.NurtureEnums.MainMenu.Tools);
        }, this);
        var analysis = this.analysis.nativeElement;
        analysis.addEventListener(buttonModule.Button.tapEvent, function (data) {
            _this.navigate(nurture_enums_1.NurtureEnums.MainMenu.Analysis);
        }, this);
        var settings = this.settings.nativeElement;
        settings.addEventListener(buttonModule.Button.tapEvent, function (data) {
            _this.navigate(nurture_enums_1.NurtureEnums.MainMenu.Settings);
        }, this);
    };
    FooterComponent.prototype.navigate = function (menuItem) {
        this.selectIcon(menuItem);
        this.nurtureRoutre.navigateToMainRoute(menuItem);
    };
    FooterComponent.prototype.selectIcon = function (menuItem) {
        this.unSelectAll();
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("dashboard_selected");
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("marketplace_selected");
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("tools_selected");
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("analysis_selected");
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("settings_selected");
                break;
        }
        this.getNavigationTitle(menuItem).className = "footer-title-selected";
    };
    FooterComponent.prototype.unSelectAll = function () {
        this.getNavigationImage(nurture_enums_1.NurtureEnums.MainMenu.Dashboard).imageSource = imageSource.fromResource("dashboard");
        this.getNavigationImage(nurture_enums_1.NurtureEnums.MainMenu.Marketplace).imageSource = imageSource.fromResource("marketplace");
        this.getNavigationImage(nurture_enums_1.NurtureEnums.MainMenu.Tools).imageSource = imageSource.fromResource("tools");
        this.getNavigationImage(nurture_enums_1.NurtureEnums.MainMenu.Analysis).imageSource = imageSource.fromResource("analysis");
        this.getNavigationImage(nurture_enums_1.NurtureEnums.MainMenu.Settings).imageSource = imageSource.fromResource("settings");
        this.getNavigationTitle(nurture_enums_1.NurtureEnums.MainMenu.Dashboard).className = "footer-title";
        this.getNavigationTitle(nurture_enums_1.NurtureEnums.MainMenu.Marketplace).className = "footer-title";
        this.getNavigationTitle(nurture_enums_1.NurtureEnums.MainMenu.Tools).className = "footer-title";
        this.getNavigationTitle(nurture_enums_1.NurtureEnums.MainMenu.Analysis).className = "footer-title";
        this.getNavigationTitle(nurture_enums_1.NurtureEnums.MainMenu.Settings).className = "footer-title";
    };
    FooterComponent.prototype.getNavigationImage = function (menuItem) {
        var navigationStack;
        var navigationImg;
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                navigationStack = this.dashboard.nativeElement;
                navigationImg = navigationStack.getChildAt(0);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                navigationStack = this.marketplace.nativeElement;
                navigationImg = navigationStack.getChildAt(0);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                navigationStack = this.tools.nativeElement;
                navigationImg = navigationStack.getChildAt(0);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                navigationStack = this.analysis.nativeElement;
                navigationImg = navigationStack.getChildAt(0);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                navigationStack = this.settings.nativeElement;
                navigationImg = navigationStack.getChildAt(0);
                break;
        }
        return navigationImg;
    };
    FooterComponent.prototype.getNavigationTitle = function (menuItem) {
        var navigationStack;
        var navigationImg;
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                navigationStack = this.dashboard.nativeElement;
                navigationImg = navigationStack.getChildAt(1);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                navigationStack = this.marketplace.nativeElement;
                navigationImg = navigationStack.getChildAt(1);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                navigationStack = this.tools.nativeElement;
                navigationImg = navigationStack.getChildAt(1);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                navigationStack = this.analysis.nativeElement;
                navigationImg = navigationStack.getChildAt(1);
                break;
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                navigationStack = this.settings.nativeElement;
                navigationImg = navigationStack.getChildAt(1);
                break;
        }
        return navigationImg;
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
            templateUrl: "shared/footer/footer.html",
            styleUrls: ["shared/footer/footer-common.css", "shared/footer/footer.css"]
        }), 
        __metadata('design:paramtypes', [nurturerouter_service_1.NurtureRouter, user_service_1.UserService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map