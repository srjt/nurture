"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var dashboardItem_component_1 = require("./pages/dashboard/dashboardItem.component");
var footer_component_1 = require("./shared/footer/footer.component");
var pagetitle_component_1 = require("./components/pagetitle/pagetitle.component");
var user_service_1 = require("./shared/user/user.service");
var nurturerouter_service_1 = require("./shared/navigation/nurturerouter.service");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboardItem_component_1.DashboardItemComponent,
                footer_component_1.FooterComponent,
                pagetitle_component_1.PageTitleComponent
            ].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService, nurturerouter_service_1.NurtureRouter],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map