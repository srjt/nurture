var  _ = require("lodash");

import { DashboardService } from "../../shared/dashboard/dashboard.service";
import observable = require("data/observable");
import observableArrayModule = require("data/observable-array");

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { ScrollEventData } from "ui/scroll-view";
import { ScrollView } from "ui/scroll-view";

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

  data: observableArrayModule.ObservableArray<observable.Observable>;
  currentPage: number;
  loading:boolean;

  @ViewChild("dashboardScrollView") dashboardScrollView: ElementRef;
  @ViewChild("pullToRefresh") pullToRefresh: ElementRef;

  constructor(private dashboardService: DashboardService, private page: Page) {
    this.data = new observableArrayModule.ObservableArray([]);
  }

  ngOnInit() {
    let dvScrollView = <ScrollView>this.dashboardScrollView.nativeElement;
    this.currentPage = 1;

    this.loading = false;
    let onScroll =  _.throttle(()=>{
          this.currentPage++;
          this.load(null, this.currentPage);
        }, 1000, { 'trailing': true });
    dvScrollView.on('scroll',(data: any)=>{
      if((dvScrollView.scrollableHeight - dvScrollView.verticalOffset) <=0 && !this.loading){
        onScroll();  
      }
    });
    this.load(null, this.currentPage);
  }

  refreshList(args) {
    _.throttle(()=>{
      this.load(args, 1);
    }, 2000)();
  }

  load(args, pageNo){

    this.loading = true;
    this.dashboardService.load(pageNo).subscribe((res) =>{
      for (var i = res.data.length - 1; i >= 0; i--) {
        let oItem = new observable.Observable(res.data[i]);
        let exists = false;
        if(this.data)
        for (var j = this.data.length - 1; j >= 0; j--) {
          if(this.data.getItem(j).get("_id")  == oItem.get("_id") ){
            exists = true;
            break;
          }
        }
        if(!exists){ 
          if(pageNo == 1){
            this.data.unshift(oItem);
          }
          else{
            this.data.push(oItem);
          }
        }
      }
      this.loading = false;
      if(args){
        args.object.refreshing = false;
      }
    }, ()=>{
      this.loading = false;
      if(args){ 
         args.object.refreshing = false;
      }
    });    
  }
}