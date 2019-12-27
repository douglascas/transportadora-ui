import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transportadora } from 'src/app/models/transportadora';
import { TransportadoraService } from '../services/transportadora.service';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-transportadora',
  templateUrl: './transportadora.component.html',
  styleUrls: ['./transportadora.component.scss']
})
export class TransportadoraComponent implements OnInit {

  transportadora: Transportadora;

  termoAceito = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _transportadoraService: TransportadoraService,
    private _addressService: AddressService,
  ) { }

  ngOnInit() {
    if (this._route.snapshot.paramMap.get('id')) {
      const id = this._route.snapshot.paramMap.get('id');
      this.getTransportadoraById(+id); // transforma o ID em number e envia para o método.
    } else {
      this.transportadora = new Transportadora();
    }
  }

  updateCep(): void {
    of(this.address.zipCode)
      .pipe(takeUntil(this._destroyed), debounceTime(300))
      .subscribe({
        next: value => {
          if (value) {
            this._getAddressByZip(value);
          } else {
            this._cleanZipCodeFields();
          }
        },
        error: (err: Error) => this._toastrService.error(err.message),
      });
  }

  save(transportadora: Transportadora): void {
    if (transportadora.id) {
      this._transportadoraService.edit(transportadora).subscribe();
    } else {
      this._transportadoraService.create(transportadora).subscribe();
    }

    this._router.navigate(['/home']);
  }

  getTransportadoraById(id: number): void {
    this._transportadoraService.getTransportadoraById(id)
      .subscribe(transportadora => this.transportadora = transportadora);
  }

}
