import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Foedevare } from '../../shared/foedevare';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
    selector: "soegning",
    templateUrl: "pages/soegning/soegning.html",
    styleUrls: ["pages/soegning/soegning-common.css", "pages/soegning/soegning.css"],
    providers: [ DataService ]
})

export class SoegningComponent {
    isLoading: boolean;
    foedevarer: Foedevare[];
    filtreredeFoedevarer: Foedevare[];
    soegetekst: string;

    constructor(private dataService: DataService) {
        this.isLoading = true;
        this.dataService.getFoedevarer()
        .subscribe(foedevarer => {
            this.foedevarer = this.filtreredeFoedevarer = foedevarer;
            this.isLoading = false;
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

}