import { NurtureEnums } from "./nurture.enums"
import { RouterExtensions } from "nativescript-angular/router";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NurtureRouter {

    private _navItemSource = new BehaviorSubject<number>(0);
    public navItem$ = this._navItemSource.asObservable();

    constructor(private routerExtensions: RouterExtensions) {
        this.navigateToMainRoute(NurtureEnums.MainMenu.Dashboard);
    }
    navigateToMainRoute(menuItem: NurtureEnums.MainMenu, options = {}) {
        this._navItemSource.next(menuItem);
        switch (menuItem) {
            case NurtureEnums.MainMenu.Dashboard:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case NurtureEnums.MainMenu.Marketplace:
                this.routerExtensions.navigate(["/marketplace"], options);
                break;
            case NurtureEnums.MainMenu.Tools:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case NurtureEnums.MainMenu.Analysis:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
            case NurtureEnums.MainMenu.Settings:
                this.routerExtensions.navigate(["/dashboard"], options);
                break;
        }
    }
    getMainMenuTitle(menuItem) {
        switch (menuItem) {
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
