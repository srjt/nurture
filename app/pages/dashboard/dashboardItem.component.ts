import * as application from "application";
import { DashboardService } from "../../shared/dashboard/dashboard.service";
import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
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
      let thumbnailImage = <Image>this.thumbnailImage.nativeElement;
    thumbnailImage.imageSource = null;
    if (application.android) {
      this.dashboardService.loadThumbnail(this.data.thumbnail)
        .then((img)=>{
          thumbnailImage.imageSource = <imageSource.ImageSource>img ;
        },(err)=>{
          console.log(err + " URL " + this.data.thumbnail)
          thumbnailImage.imageSource  = imageSource.fromResource("bg_login");
        });
    }
    else{
      imageSource.fromUrl(this.data.thumbnail)
        .then((res: imageSource.ImageSource) => {
          thumbnailImage.imageSource  = res;
         }, (err) => {
          console.log(err + " URL " + this.data.thumbnail);
          thumbnailImage.imageSource = imageSource.fromResource("bg_login");
        });  
    }
  }
}