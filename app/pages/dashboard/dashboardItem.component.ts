import * as application from "application";
 
import { DashboardService } from "../../shared/dashboard/dashboard.service";

import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";
import { Image } from "ui/image";

import * as imageSource from "image-source";

@Component({
  selector: "dashboard-item",
  providers: [DashboardService],
  templateUrl: "pages/dashboard/dashboardItem.html",
  styleUrls: ["pages/dashboard/dashboardItem-common.css"],
})
export class DashboardItemComponent implements OnInit {
  @ViewChild("thumbnailImage") thumbnailImage: ElementRef;

  @Input() data;
  constructor(private dashboardService: DashboardService, private routerExtensions: RouterExtensions, private page: Page) {
  }
  ngOnInit() {
  }

  ngOnChanges(){
    if(!this.data.thumbnailPic){
      this.loadImage();
    }
  }
  browseLink() {
    this.routerExtensions.navigate(["/browse" ,   this.data.link ]);
  }

  loadImage(){
    console.log("load image " + this.data.thumbnail);
    if (application.android) {
      this.dashboardService.loadThumbnail(this.data.thumbnail)
        .then((img)=>{
             this.data.thumbnailPic = img;
             console.log("loaded image " + this.data.thumbnail);
        },(err)=>{
          console.log(err + " URL " + this.data.thumbnail)
          this.data.thumbnailPic = imageSource.fromResource("bg_login");
        });
    }
    else{
      imageSource.fromUrl(this.data.thumbnail)
        .then((res: imageSource.ImageSource) => {
          this.data.thumbnailPic = res;
          console.log("loaded image " + this.data.thumbnail);
         }, (err) => {
          console.log(err + " URL " + this.data.thumbnail);
          this.data.thumbnailPic = imageSource.fromResource("bg_login");
        });  
    }
  }
}