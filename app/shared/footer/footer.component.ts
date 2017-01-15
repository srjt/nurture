import { UserService } from "../../shared/user/user.service";
import { NurtureEnums } from "../../shared/navigation/nurture.enums";
import { NurtureRouter } from "../../shared/navigation/nurturerouter.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as imageSource from "image-source";
import { Image } from "ui/image";
import { Label } from "ui/label";
import { StackLayout } from "ui/layouts/stack-layout";
import buttonModule = require("ui/button");

@Component({
    selector: "footer",
    templateUrl: "shared/footer/footer.html",
    styleUrls: ["shared/footer/footer-common.css", "shared/footer/footer.css"]
})

export class FooterComponent implements OnInit {

    @ViewChild("dashboard") dashboard: ElementRef;
    @ViewChild("marketplace") marketplace: ElementRef;
    @ViewChild("tools") tools: ElementRef;
    @ViewChild("analysis") analysis: ElementRef;
    @ViewChild("settings") settings: ElementRef;

    selectedOption: string;
    constructor(private nurtureRoutre: NurtureRouter,
        private userService: UserService) {
    }

    ngOnInit() {
        let dashboard = <StackLayout>this.dashboard.nativeElement;
        dashboard.addEventListener(buttonModule.Button.tapEvent, (data: any) => {
            this.navigate(NurtureEnums.MainMenu.Dashboard);
        }, this);

        let marketplace = <StackLayout>this.marketplace.nativeElement;
        marketplace.addEventListener(buttonModule.Button.tapEvent, (data: any) => {
            this.navigate(NurtureEnums.MainMenu.Marketplace);
        }, this);

        let tools = <Image>this.tools.nativeElement;
        tools.addEventListener(buttonModule.Button.tapEvent, (data: any) => {
            this.navigate(NurtureEnums.MainMenu.Tools);
        }, this);

        let analysis = <Image>this.analysis.nativeElement;
        analysis.addEventListener(buttonModule.Button.tapEvent, (data: any) => {
            this.navigate(NurtureEnums.MainMenu.Analysis);
        }, this);

        let settings = <Image>this.settings.nativeElement;
        settings.addEventListener(buttonModule.Button.tapEvent, (data: any) => {
            this.navigate(NurtureEnums.MainMenu.Settings);
        }, this);
    }

    navigate(menuItem: NurtureEnums.MainMenu) {
        this.selectIcon(menuItem);
        this.nurtureRoutre.navigateToMainRoute(menuItem);
    }

    selectIcon(menuItem: NurtureEnums.MainMenu) {
        this.unSelectAll();
        switch (menuItem) {
            case NurtureEnums.MainMenu.Dashboard:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("dashboard_selected");
                break;
            case NurtureEnums.MainMenu.Marketplace:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("marketplace_selected");
                break;
            case NurtureEnums.MainMenu.Tools:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("tools_selected");
                break;
            case NurtureEnums.MainMenu.Analysis:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("analysis_selected");
                break;
            case NurtureEnums.MainMenu.Settings:
                this.getNavigationImage(menuItem).imageSource = imageSource.fromResource("settings_selected");
                break;
        }
        this.getNavigationTitle(menuItem).className = "footer-title-selected";
    }

    unSelectAll() {
        this.getNavigationImage(NurtureEnums.MainMenu.Dashboard).imageSource = imageSource.fromResource("dashboard");
        this.getNavigationImage(NurtureEnums.MainMenu.Marketplace).imageSource = imageSource.fromResource("marketplace");
        this.getNavigationImage(NurtureEnums.MainMenu.Tools).imageSource = imageSource.fromResource("tools");
        this.getNavigationImage(NurtureEnums.MainMenu.Analysis).imageSource = imageSource.fromResource("analysis");
        this.getNavigationImage(NurtureEnums.MainMenu.Settings).imageSource = imageSource.fromResource("settings");
        this.getNavigationTitle(NurtureEnums.MainMenu.Dashboard).className = "footer-title";
        this.getNavigationTitle(NurtureEnums.MainMenu.Marketplace).className = "footer-title";
        this.getNavigationTitle(NurtureEnums.MainMenu.Tools).className = "footer-title";
        this.getNavigationTitle(NurtureEnums.MainMenu.Analysis).className = "footer-title";
        this.getNavigationTitle(NurtureEnums.MainMenu.Settings).className = "footer-title";

    }

    private getNavigationImage(menuItem: NurtureEnums.MainMenu) {
        let navigationStack;
        let navigationImg;
        switch (menuItem) {
            case NurtureEnums.MainMenu.Dashboard:
                navigationStack = <StackLayout>this.dashboard.nativeElement;
                navigationImg = <Image>navigationStack.getChildAt(0);
                break;
            case NurtureEnums.MainMenu.Marketplace:
                navigationStack = <StackLayout>this.marketplace.nativeElement;
                navigationImg = <Image>navigationStack.getChildAt(0);
                break;
            case NurtureEnums.MainMenu.Tools:
                navigationStack = <StackLayout>this.tools.nativeElement;
                navigationImg = <Image>navigationStack.getChildAt(0);
                break;
            case NurtureEnums.MainMenu.Analysis:
                navigationStack = <StackLayout>this.analysis.nativeElement;
                navigationImg = <Image>navigationStack.getChildAt(0);
                break;
            case NurtureEnums.MainMenu.Settings:
                navigationStack = <StackLayout>this.settings.nativeElement;
                navigationImg = <Image>navigationStack.getChildAt(0);
                break;
        }

        return navigationImg;
    }
    private getNavigationTitle(menuItem: NurtureEnums.MainMenu) {
        let navigationStack;
        let navigationImg;
        switch (menuItem) {
            case NurtureEnums.MainMenu.Dashboard:
                navigationStack = <StackLayout>this.dashboard.nativeElement;
                navigationImg = <Label>navigationStack.getChildAt(1);
                break;
            case NurtureEnums.MainMenu.Marketplace:
                navigationStack = <StackLayout>this.marketplace.nativeElement;
                navigationImg = <Label>navigationStack.getChildAt(1);
                break;
            case NurtureEnums.MainMenu.Tools:
                navigationStack = <StackLayout>this.tools.nativeElement;
                navigationImg = <Label>navigationStack.getChildAt(1);
                break;
            case NurtureEnums.MainMenu.Analysis:
                navigationStack = <StackLayout>this.analysis.nativeElement;
                navigationImg = <Label>navigationStack.getChildAt(1);
                break;
            case NurtureEnums.MainMenu.Settings:
                navigationStack = <StackLayout>this.settings.nativeElement;
                navigationImg = <Label>navigationStack.getChildAt(1);
                break;
        }

        return navigationImg;
    }
}