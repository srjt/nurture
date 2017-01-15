var  _ = require("lodash");
 

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import {PullToRefresh} from "nativescript-pulltorefresh";
import { PageTitle } from "../../shared/navigation/pagetitle.service";

@Component({
  selector: "marketplace",
  providers: [],
  templateUrl: "pages/marketplace/marketplace.html",
  styleUrls: ["pages/marketplace/marketplace-common.css", "pages/marketplace/marketplace.css"],
})
export class MarketplaceComponent implements OnInit {

  @ViewChild("marketplaceListView") marketplaceListView: ElementRef;
  @ViewChild("pullToRefresh") pullToRefresh: ElementRef;

  constructor(private pageTitle: PageTitle) {
  }

  ngOnInit() {
  }

  refreshList(args) {
  }

  load(args, pageNo){
  }
}