import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Barcode } from '../shared/barcode.model';
import { map } from 'rxjs/operators';

@Injectable()
export class BarcodeService {

  constructor(private http: HttpClient) { }

  //retreiving BarcodeService

  getBarcode(partCode) {
    return this.http.get(environment.apiBaseUrl+'/barcode/'+partCode)
      .toPromise()
      .then(res => res as Barcode);
  }
/* premestiti u servis za Nonconformity
  addNonconformity(newNonconformity) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/nonconformity', newNonconformity, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteNonconformity(id) {
    return this.http.delete('http://localhost:3000/api/nonconformity/'+id)
      .pipe(map(res => res.json()));
  }*/

}