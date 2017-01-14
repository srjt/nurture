import { UserService } from "../../shared/user/user.service";
import { NurtureEnums } from "../../shared/navigation/nurture.enums";
import { NurtureRouter } from "../../shared/navigation/nurturerouter.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Label } from "ui/label";

@Component({
    selector: "page-title",
    providers: [UserService, NurtureRouter],
    templateUrl: "components/pagetitle/pagetitle.html",
    styleUrls: ["components/pagetitle/pagetitle-common.css"]
})

export class PageTitleComponent implements OnInit {

    // @ViewChild("title") title: ElementRef;

    selectedOption: string;
    constructor(private userService: UserService,
        private nurtureRouter: NurtureRouter) {
    }

    ngOnInit() {
    }
}