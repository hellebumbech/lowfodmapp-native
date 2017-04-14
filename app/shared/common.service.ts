import { Injectable } from '@angular/core';

import * as app from 'application'; 
import { isAndroid } from 'platform';
declare var android: any;

@Injectable()

export class CommonService {


public hideKeyboard() {
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