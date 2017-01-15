import { NurtureEnums } from "./nurture.enums"
import { Injectable } from "@angular/core";

@Injectable()
export class PageTitle {

    constructor() {
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
            default:
                return null;
        }
    }
}