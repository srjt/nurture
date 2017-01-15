"use strict";
var nurture_enums_1 = require("./nurture.enums");
var core_1 = require("@angular/core");
var PageTitle = (function () {
    function PageTitle() {
    }
    PageTitle.prototype.getMainMenuTitle = function (menuItem) {
        switch (menuItem) {
            case nurture_enums_1.NurtureEnums.MainMenu.Dashboard:
                return "Dashboard";
            case nurture_enums_1.NurtureEnums.MainMenu.Marketplace:
                return "Marketplace";
            case nurture_enums_1.NurtureEnums.MainMenu.Tools:
                return "Tools";
            case nurture_enums_1.NurtureEnums.MainMenu.Analysis:
                return "Analysis";
            case nurture_enums_1.NurtureEnums.MainMenu.Settings:
                return "Settings";
            default:
                return null;
        }
    };
    PageTitle = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PageTitle);
    return PageTitle;
}());
exports.PageTitle = PageTitle;
//# sourceMappingURL=pagetitle.service.js.map