import { UserService } from "../../shared/user/user.service";
import { NurtureEnums } from "../../shared/navigation/nurture.enums";
import { NurtureRouter } from "../../shared/navigation/nurturerouter.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Label } from "ui/label";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "page-title",
    templateUrl: "components/pagetitle/pagetitle.html",
    styleUrls: ["components/pagetitle/pagetitle-common.css"]
})

export class PageTitleComponent implements OnInit {

    @ViewChild("pageTitle") pageTitle: ElementRef;

    selectedOption: string;
    subscription: Subscription;

    constructor(private userService: UserService,
        private nurtureRouter: NurtureRouter) {
        
    }

    ngOnInit() {
        this.subscription = this.nurtureRouter.navItem$
            .subscribe(item => {
                this.setPageTitle(this.nurtureRouter.getMainMenuTitle(item));
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setPageTitle(title) {
        let pageTitleElem = <Label>this.pageTitle.nativeElement;
        pageTitleElem.text = title;
    }
}