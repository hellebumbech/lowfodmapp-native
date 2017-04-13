import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Foedevare } from '../../shared/foedevare';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator";

@Component({
    selector: "soegning",
    templateUrl: "pages/soegning/soegning.html",
    styleUrls: ["pages/soegning/soegning-common.css", "pages/soegning/soegning.css"],
    providers: [ DataService ]
})

export class SoegningComponent {
    foedevarer: Foedevare[];
    filtreredeFoedevarer: Foedevare[];
    soegetekst: string;
    loader = new LoadingIndicator();

    constructor(private dataService: DataService, private router: Router) {
        this.loader.show();
        this.dataService.getFoedevarer()
        .subscribe(foedevarer => {
            this.foedevarer = this.filtreredeFoedevarer = foedevarer;
            this.loader.hide();
        });
    };

    assignCopy() {
        this.filtreredeFoedevarer = (<any>Object).assign([], this.foedevarer);
    }

    filterItem(value:string) {
        if(!value) {
            this.assignCopy();
            this.soegetekst = "";
        }
        this.filtreredeFoedevarer = (<any>Object).assign([], this.foedevarer).filter(
            foedevare => foedevare.navn.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }

    registrering() {
        this.router.navigate(["/registrering"]);
    }

}