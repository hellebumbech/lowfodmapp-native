import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Kulhydrattype } from '../../shared/kulhydrattype';
import { Router } from "@angular/router";

@Component({
    selector: "registrering",
    templateUrl: "pages/registrering/registrering.html",
    styleUrls: ["pages/registrering/registrering-common.css", "pages/registrering/registrering.css"],
    providers: [ DataService ]
})

export class RegistreringComponent {
    kulhydrattyper:Kulhydrattype[];
    intolerance:string[];
    isLoading: boolean = !this.kulhydrattyper;

    constructor(private dataService: DataService, private router: Router) {
        this.dataService.getKulhydrattyper().subscribe(kulhydrattyper => {
            this.kulhydrattyper = kulhydrattyper;
            this.intolerance = this.dataService.getIntolerance();
            for(var i in this.intolerance) {
                for(var j in this.kulhydrattyper) {
                    if(this.intolerance[i] == this.kulhydrattyper[j].sukkerstof) {
                        this.kulhydrattyper[j].intolerance = true;
                    }
                }
            };
            this.isLoading = false;
        })
    }

    gemIntolerance() {
        this.dataService.gemIntolerance(this.kulhydrattyper);
        this.router.navigate(["/soegning"]);
    }

}