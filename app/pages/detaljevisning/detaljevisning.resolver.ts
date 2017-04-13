import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Foedevare } from '../../shared/foedevare';

@Injectable()

export class DetaljevisningResolver implements Resolve<any> {

  constructor(private dataservice: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataservice.getFoedevareById(route.params['id']);
  }
}
