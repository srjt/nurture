import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView } from "ui/web-view";
import { View } from "ui/core/view";

import { PageRoute } from "nativescript-angular";

@Component({
  selector: "web-browser",
  providers: [],
  templateUrl: "pages/webBrowser/webBrowser.html",
  styleUrls: ["pages/webBrowser/webBrowser-common.css"],
})

export class WebBrowserComponent implements OnInit {

  @ViewChild("webView") webView: ElementRef;
  url: string;
  constructor(private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => { this.url = params['url']; });
  }

  ngOnInit() {
    let webView = <WebView>this.webView.nativeElement;
    webView.url = this.url;
  }
}