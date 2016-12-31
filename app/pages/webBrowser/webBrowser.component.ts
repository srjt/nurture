import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView } from "ui/web-view";
import { View } from "ui/core/view";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "web-browser",
  providers: [],
  templateUrl: "pages/webBrowser/webBrowser.html"
})

export class WebBrowserComponent implements OnInit {

  @ViewChild("webView") webView: ElementRef;
  url: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params      
      .forEach((params) => { this.url = params['url']; });
  }

  ngOnInit() {
    let webView = <WebView>this.webView.nativeElement;
    webView.url = this.url;
  }
}