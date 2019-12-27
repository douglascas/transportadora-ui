import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transportadora } from 'src/app/models/transportadora';
import { TransporadoraRepository } from '../repository/transporadora.repository';

@Injectable()
export class TransportadoraService {

  constructor(
    private _http: HttpClient,
    private transportadoraRepository: TransporadoraRepository,
  ) { }


  list(): Observable<Transportadora[]> {
    return this.transportadoraRepository.list();
  }

  getTransportadoraById(transporadoraId: number): Observable<Transportadora> {
    return this.transportadoraRepository.getTransportadoraById(transporadoraId);
  }

  create(transportadora: Transportadora): Observable<Transportadora> {
    return this.transportadoraRepository.create(transportadora);
  }

  edit(transportadora: Transportadora): Observable<Transportadora> {
    return this.transportadoraRepository.edit(transportadora);
  }

  delete(transportadora: Transportadora): Observable<void> {
    return this.transportadoraRepository.delete(transportadora);
  }

}
