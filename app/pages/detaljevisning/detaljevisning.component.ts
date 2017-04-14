import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foedevare } from '../../shared/foedevare';
import { DetaljevisningService } from './detaljevisning.service';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { CommonService } from "../../shared/common.service";

@Component({
    selector: 'visning',
    templateUrl: "pages/detaljevisning/detaljevisning.html",
	styleUrls: ["pages/detaljevisning/detaljevisning-common.css", "pages/detaljevisning/detaljevisning.css"],
	providers: [ DetaljevisningService, CommonService ]
})

export class DetaljevisningComponent implements OnInit {
	foedevare:Foedevare;
	foedevareIntolerance:any;
	sukkerstofferIFoedevare:string[];
	loader = new LoadingIndicator();

	constructor(
		private route: ActivatedRoute, 
		private detaljevisningService: DetaljevisningService,
		private commonService: CommonService
	) {
		this.commonService.hideKeyboard();
	}

	ngOnInit() {
		this.foedevare = this.route.snapshot.data['foedevare'];
		this.foedevareIntolerance = this.detaljevisningService.getIntoleranceNiveau(this.foedevare);
		this.sukkerstofferIFoedevare = this.detaljevisningService.getKulhydraterIFoedevare(this.foedevare);
	}

}