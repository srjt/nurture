import { DashboardService } from "../../shared/dashboard/dashboard.service";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";

@Component({
  selector: "dashboard",
  providers: [DashboardService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"],
})
export class DashboardComponent implements OnInit {
  data: Array<any>;

  constructor(private dashboardService: DashboardService, private page: Page) {
  }

  ngOnInit() {
  	this.dashboardService.load().subscribe((res) =>{
  		this.data = res.data;
  	});
  }
}