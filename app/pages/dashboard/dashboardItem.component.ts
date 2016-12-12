 
import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";

@Component({
  selector: "dashboard-item",
  providers: [],
  templateUrl: "pages/dashboard/dashboardItem.html",
  styleUrls: ["pages/dashboard/dashboardItem-common.css"],
})
export class DashboardItemComponent implements OnInit {

  @Input() data={} 
  constructor(private page: Page) {
  }
  ngOnInit() {
  }
}