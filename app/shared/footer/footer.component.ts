import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as imageSource from "image-source";
import { Image } from "ui/image";

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
    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
        console.log("onit footer");
        this.navigate("dashboard")
    }
    navigate(pg) {
        console.log("Navigating to " + pg);
        this.selectIcon(pg);
        switch (pg) {
            case "dashboard":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case "marketplace":
            let url = "www.google.com";
            this.routerExtensions.navigate(["/browse", url]);
                     break;
            case "tools":
                this.routerExtensions.navigate([""]);
                break;
            case "analysis":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
            case "settings":
                this.routerExtensions.navigate(["/dashboard"]);
                break;
        }
    }

    selectIcon(pg) {
        this.unSelectAll();
        switch (pg) {
            case "dashboard":
                let dashboard = <Image>this.dashboard.nativeElement;
                dashboard.imageSource = imageSource.fromResource("dashboard_selected");
                break;
            case "marketplace":
                let marketplace = <Image>this.marketplace.nativeElement;
                marketplace.imageSource = imageSource.fromResource("marketplace_selected");
                break;
            case "tools":
                let tools = <Image>this.tools.nativeElement;
                tools.imageSource = imageSource.fromResource("tools_selected");
                break;
            case "analysis":
                let analysis = <Image>this.analysis.nativeElement;
                analysis.imageSource = imageSource.fromResource("analysis_selected");
                break;
            case "settings":
                let settings = <Image>this.settings.nativeElement;
                settings.imageSource = imageSource.fromResource("settings_selected");
                break;
        }
    }
    unSelectAll() {
        let dashboard = <Image>this.dashboard.nativeElement;
        dashboard.imageSource = imageSource.fromResource("dashboard");
        let marketplace = <Image>this.marketplace.nativeElement;
        marketplace.imageSource = imageSource.fromResource("marketplace");
        let tools = <Image>this.tools.nativeElement;
        tools.imageSource = imageSource.fromResource("tools");
        let analysis = <Image>this.analysis.nativeElement;
        analysis.imageSource = imageSource.fromResource("analysis");
        let settings = <Image>this.settings.nativeElement;
        settings.imageSource = imageSource.fromResource("settings");
    }
}