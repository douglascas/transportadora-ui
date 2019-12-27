import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddressService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCep(cep: number): Observable<any> {
    return this._http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
