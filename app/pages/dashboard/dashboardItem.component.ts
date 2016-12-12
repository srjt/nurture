 
import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import * as imageSource from "image-source";
@Component({
  selector: "dashboard-item",
  providers: [],
  templateUrl: "pages/dashboard/dashboardItem.html",
  styleUrls: ["pages/dashboard/dashboardItem-common.css"],
})
export class DashboardItemComponent implements OnInit {

  @Input() data;
  thumbnailPic: any
  constructor(private page: Page) {
  }
  ngOnInit() {
    this.loadImage();
  }

  loadImage(){
    imageSource.fromUrl(this.data.picUrl)
      .then((res: any) => {
        this.thumbnailPic = res;
       }, (error) => {
        this.thumbnailPic = imageSource.fromResource("bg_login");
      });
  }
}