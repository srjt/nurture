"use strict";
var login_component_1 = require("./pages/login/login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var webBrowser_component_1 = require("./pages/webBrowser/webBrowser.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "browse/:url", component: webBrowser_component_1.WebBrowserComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    dashboard_component_1.DashboardComponent,
    webBrowser_component_1.WebBrowserComponent
];
//# sourceMappingURL=app.routing.js.map