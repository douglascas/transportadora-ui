import { Transportadora } from 'src/app/models/transportadora';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TransporadoraRepository {

  private _transportadoras = [];

  get transportadora(): Transportadora[] {
    return this._transportadoras;
  }

  set transportadoras(transportadoras: Transportadora[]) {
    this._transportadoras = transportadoras;
  }

  list(): Observable<Transportadora[]> {
    return of(this.transportadoras);
  }

  getTransportadoraById(transportadoraId: number): Observable<Transportadora> {
    const transp = this.transportadoras.filter(t => t.id === transportadoraId);
    return of(transp as any);
  }

  create(transportadora: Transportadora): Observable<Transportadora> {
    const newTransp = Object.assign(new Transportadora(), transportadora, {
      id: this.transportadoras && this.transportadoras.length ? this.transportadoras.length + 1 : 1,
    });
    this._transportadoras.push(newTransp);
    return of(transportadora);
  }

  edit(transportadora: Transportadora): Observable<Transportadora> {
    this.transportadoras.forEach(transp => {
      if (transportadora.id === transp.id) {
        transp = transportadora;
      }
    });

    return of(transportadora);
  }

  delete(transportadora: Transportadora): Observable<void> {
    this.transportadoras.forEach(transp => {
      if (transportadora.id === transp.id) {
        transp = null;
      }
    });

    return of();
  }

}
