import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { DashboardItemComponent } from "./pages/dashboard/dashboardItem.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageTitleComponent } from "./components/pagetitle/pagetitle.component";

import { UserService } from "./shared/user/user.service";
import { NurtureRouter } from "./shared/navigation/nurturerouter.service";
import { PageTitle } from "./shared/navigation/pagetitle.service";

import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [
    	AppComponent,
        DashboardItemComponent,
        FooterComponent,
        PageTitleComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent],
    providers: [UserService, NurtureRouter, PageTitle],
    imports: [
    	NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
	    NativeScriptRouterModule,
    	NativeScriptRouterModule.forRoot(routes)
    ],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
