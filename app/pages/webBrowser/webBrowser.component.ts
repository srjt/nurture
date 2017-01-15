import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView } from "ui/web-view";
import { ActivatedRoute } from '@angular/router';
import { PageTitle } from "../../shared/navigation/pagetitle.service";

@Component({
  selector: "web-browser",
  templateUrl: "pages/webBrowser/webBrowser.html",
  styleUrls: ["pages/webBrowser/webBrowser.css"],
})

export class WebBrowserComponent implements OnInit {

  @ViewChild("webView") webView: ElementRef;
  url: string;
  
  constructor(private activatedRoute: ActivatedRoute,
              private pageTitle: PageTitle) {
    this.activatedRoute.params      
      .forEach((params) => { this.url = params['url']; });
  }

  ngOnInit() {
    let webView = <WebView>this.webView.nativeElement;
    webView.url = this.url;
  }
}