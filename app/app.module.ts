import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [
    	AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent],
    imports: [
    	NativeScriptModule,
        NativeScriptHttpModule,
	    NativeScriptRouterModule,
    	NativeScriptRouterModule.forRoot(routes)
    ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
