import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
   selector: 'footer',
   templateUrl: 'shared/footer/footer.html',
   styleUrls: ['shared/footer/footer-common.css']
})

export class FooterComponent {
    constructor(private routerExtensions: RouterExtensions){

    }
    navigate(pg){
        console.log('Navigating to ' + pg);
        if(pg === 'home'){
            this.routerExtensions.navigate(["/dashboard"]);
        }
        else{
            let url = "www.google.com";
            this.routerExtensions.navigate(["/browse", url]);
        }
    }
}