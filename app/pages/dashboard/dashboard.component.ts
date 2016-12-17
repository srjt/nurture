import { DashboardService } from "../../shared/dashboard/dashboard.service";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { ScrollEventData } from "ui/scroll-view";

import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import {PullToRefresh} from "nativescript-pulltorefresh";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "dashboard",
  providers: [DashboardService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"],
})
export class DashboardComponent implements OnInit {
  data: Array<any> = [];

  constructor(private dashboardService: DashboardService, private page: Page) {
  }

  ngOnInit() {
    this.load(null);
  }

  refreshList(args) {
    console.log(args[0]);
    this.load(args);
  }
  load(args){
    console.log('reloading dashboard');
    this.dashboardService.load().subscribe((res) =>{
      this.data = res.data;
      if(args){
        console.log('finish loading...');
        args.object.refreshing = false;
      }
    });    
  }
}