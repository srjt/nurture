"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var tnsOAuthModule = require('nativescript-oauth');
var facebookInitOptions = {
    clientId: '1142138062501436',
    clientSecret: 'cc7ed3546740aa749038dba47a2f3ec1',
    scope: ['email'] //whatever other scopes you need 
};
tnsOAuthModule.initFacebook(facebookInitOptions);
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map