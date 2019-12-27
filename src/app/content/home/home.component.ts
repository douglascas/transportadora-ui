import { Component, OnInit } from '@angular/core';
import { Transportadora } from 'src/app/models/transportadora';
import { Router } from '@angular/router';
import { TransportadoraService } from '../services/transportadora.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transportadoras: Transportadora[];

  constructor(
    private _router: Router,
    private _transportadoraService: TransportadoraService
  ) { }

  ngOnInit() {
    this._transportadoraService.list()
      .subscribe(transportadoras => this.transportadoras = transportadoras);
  }

  /**
   * Rota para a `Transportadora` selecionada
   */
  goToTariffDetail(transportadora: Transportadora): void {
    const link = ['/edit', transportadora.id];
    this._router.navigate(link);
  }

}
