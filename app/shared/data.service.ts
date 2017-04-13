import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Kulhydrattype } from './kulhydrattype';

@Injectable()

export class DataService {

    applicationSettings = require("application-settings");
    loader = new LoadingIndicator();

    constructor(private http: Http) {}

    getFoedevarerJson() {
        return this
        .http.get('https://hellebumbech.github.io/lowfodmapp/src/data/foedevarer.json');
    }

    getFoedevarer() {
        return this.getFoedevarerJson()
        .map(res => res.json().foedevarer);
    }

    getFoedevareById(foedevareId:string) {
        this.loader.show();
        return this.getFoedevarerJson()
        .map(res => {
            var foedevarer = res.json().foedevarer;
            for(var item in foedevarer) {
                if(foedevarer[item].id == foedevareId) {
                    this.loader.hide()
                    return foedevarer[item];
                }
            };
        this.loader.hide()
        });
    }

    getKulhydrattyperJson() {
        return this.
        http.get('https://hellebumbech.github.io/lowfodmapp/src/data/kulhydrattyper.json');
    }

    getKulhydrattyper() {
        return this.getKulhydrattyperJson()
        .map(res => res.json().kulhydrattyper);
    }

    gemIntolerance(kulhydrattyper:Kulhydrattype[]) {
        var intolerance:string[] = [];
        for(var item in kulhydrattyper) {
            if(kulhydrattyper[item].intolerance == true) {
                intolerance.push(kulhydrattyper[item].sukkerstof);
            }
        }
        this.applicationSettings.setString("intolerance", JSON.stringify({ intolerance: intolerance }));
    }

    getIntolerance():string[] {
        var gemtIntolerance = this.applicationSettings.getString("intolerance");
        return (gemtIntolerance ? JSON.parse(gemtIntolerance).intolerance : []);
    }

}