import { UserService } from "../../shared/user/user.service";
import { NurtureEnums } from "../../shared/navigation/nurture.enums";
import { NurtureRouter } from "../../shared/navigation/nurturerouter.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Label } from "ui/label";
import { Subscription } from 'rxjs/Subscription';
import { PageTitle } from "../../shared/navigation/pagetitle.service";

@Component({
    selector: "page-title",
    templateUrl: "components/pagetitle/pagetitle.html",
    styleUrls: ["components/pagetitle/pagetitle-common.css"]
})

export class PageTitleComponent implements OnInit {

    @ViewChild("pageTitle") pageTitleLabel: ElementRef;

    selectedOption: string;
    subscription: Subscription;

    constructor(private userService: UserService,
        private nurtureRouter: NurtureRouter,
        private pageTitle: PageTitle) {
        
    }

    ngOnInit() {
        this.subscription = this.nurtureRouter.navItem$
            .subscribe(item => {
                this.setPageTitle(this.pageTitle.getMainMenuTitle(item));
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    setPageTitle(title) {
        let pageTitleElem = <Label>this.pageTitleLabel.nativeElement;
        pageTitleElem.text = title;
    }
}