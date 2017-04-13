import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foedevare } from '../../shared/foedevare';
import { DetaljevisningService } from './detaljevisning.service';
import { LoadingIndicator } from "nativescript-loading-indicator";

import * as app from 'application'; 
import { isAndroid } from 'platform';
declare var android: any;

@Component({
    selector: 'visning',
    templateUrl: "pages/detaljevisning/detaljevisning.html",
	styleUrls: ["pages/detaljevisning/detaljevisning-common.css", "pages/detaljevisning/detaljevisning.css"],
	providers: [ DetaljevisningService ]
})

export class DetaljevisningComponent implements OnInit {
	foedevare:Foedevare;
	foedevareIntolerance:any;
	sukkerstofferIFoedevare:string[];
	loader = new LoadingIndicator();

	constructor(
		private route: ActivatedRoute, 
		private detaljevisningService: DetaljevisningService
	) {
		this.hideKeyboard();
	}

	ngOnInit() {
		this.foedevare = this.route.snapshot.data['foedevare'];
		this.foedevareIntolerance = this.detaljevisningService.getIntoleranceNiveau(this.foedevare);
		this.sukkerstofferIFoedevare = this.detaljevisningService.getKulhydraterIFoedevare(this.foedevare);
	}


	private hideKeyboard() {
		if (isAndroid) {
			try {
				let activity = app.android.foregroundActivity;
				let Context = app.android.currentContext;
				let inputManager = Context.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
				inputManager.hideSoftInputFromWindow(activity.getCurrentFocus().getWindowToken(), (android as any).view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS);
			} catch (err) {
				console.log(err);
			}
		}
	}
}