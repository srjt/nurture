 
import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";

import * as imageSource from "image-source";

@Component({
  selector: "dashboard-item",
  providers: [],
  templateUrl: "pages/dashboard/dashboardItem.html",
  styleUrls: ["pages/dashboard/dashboardItem-common.css"],
})
export class DashboardItemComponent implements OnInit {

  @Input() data;
  constructor(private routerExtensions: RouterExtensions, private page: Page) {
  }
  ngOnInit() {
    this.loadImage();
  }

  browseLink() {
    this.routerExtensions.navigate(["/browse" ,   this.data.link ]);
  }

  loadImage(){
    imageSource.fromUrl(this.data.thumbnail)
      .then((res: imageSource.ImageSource) => {
        this.data.thumbnailPic = res;
       }, (error) => {
        this.data.thumbnailPic = imageSource.fromResource("bg_login");
      });
  }
}