import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { UserService } from "./shared/user/user.service";
import { PageTitle } from "./shared/navigation/pagetitle.service";
import { NurtureRouter } from "./shared/navigation/nurturerouter.service";

import { Subscription } from "rxjs/Subscription";
import * as _ from "lodash";

@Component({
  selector: "main",
  templateUrl: "app.html",
  styleUrls: ["/app.css"]
})
export class AppComponent implements OnInit {

  @ViewChild("pageTitleComponent") pageTitleComponent: ElementRef;
  subscription: Subscription;
  constructor(private userService: UserService,
    private pageTitle: PageTitle,
    private nurtureRouter: NurtureRouter) {

  }
  ngOnInit() {
    this.subscription = this.nurtureRouter.navItem$
      .subscribe(menuItem => {
        this.setPageTitleVisibility(menuItem);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setPageTitleVisibility(menuItem){
    let pageTitle = this.pageTitle.getMainMenuTitle(menuItem);
    let pageTitleStackLayout = <StackLayout>this.pageTitleComponent.nativeElement;
    console.log("page title is " + pageTitle);
    if(_.isEmpty(pageTitle)){
      pageTitleStackLayout.visibility = 'collapse';
    }
    else {
      pageTitleStackLayout.visibility = 'visible';
    }
  }
}