import { NurtureEnums } from "./nurture.enums"
import { RouterExtensions } from "nativescript-angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class NurtureRouter {

    public currentRoute: NurtureEnums.MainMenu;
    constructor(private routerExtensions: RouterExtensions) {
        this.currentRoute = NurtureEnums.MainMenu.Dashboard;
    }
    navigateToMainRoute(menuItem: NurtureEnums.MainMenu) {
        this.currentRoute = menuItem;
        switch (menuItem) {
            case NurtureEnums.MainMenu.Dashboard:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case NurtureEnums.MainMenu.Marketplace:
                this.routerExtensions.navigate(["/marketplace"]);
                break;
            case NurtureEnums.MainMenu.Tools:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case NurtureEnums.MainMenu.Analysis:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case NurtureEnums.MainMenu.Settings:
                this.routerExtensions.navigate(["/dashboard"]);
                break;
        }
    }
    getCurrentMainMenuTitle() {
        console.log("current rout is " + this.currentRoute);
        switch (this.currentRoute) {
            case NurtureEnums.MainMenu.Dashboard:
                return "Dashboard";
            case NurtureEnums.MainMenu.Marketplace:
                return "Marketplace";
            case NurtureEnums.MainMenu.Tools:
                return "Tools";
            case NurtureEnums.MainMenu.Analysis:
                return "Analysis";
            case NurtureEnums.MainMenu.Settings:
                return "Settings";
        }
    }
}
