import { DashboardService } from "../../shared/dashboard/dashboard.service";
import observable = require("data/observable");
import observableArrayModule = require("data/observable-array");

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { ListView } from "ui/list-view";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";
import  * as _ from "lodash";

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

  @ViewChild("dashboardListView") dashboardListView: ElementRef;
  @ViewChild("pullToRefresh") pullToRefresh: ElementRef;

  constructor(private dashboardService: DashboardService, private page: Page) {
    this.data = new observableArrayModule.ObservableArray([]);
  }

  ngOnInit() {
    let dvListView = <ListView>this.dashboardListView.nativeElement;
    this.currentPage = 1;
    this.loading = false;
    
    dvListView.addEventListener(ListView.loadMoreItemsEvent,(data: any)=>{
      this.load(null, ++this.currentPage);
    });
    this.load(null, this.currentPage);
  }

  refreshList(args) {
    console.log("refreshList");
    _.throttle(()=>{
      if(!this.loading){ 
        this.load(args, 1);
      }
    }, 1000)();
  }

  load(args, pageNo){
    this.loading =  true;
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