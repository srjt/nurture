"use strict";
var login_component_1 = require("./pages/login/login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    dashboard_component_1.DashboardComponent
];
//# sourceMappingURL=app.routing.js.map