import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { TransportadoraComponent } from './transportadora/transportadora.component';
import { CommonModule } from '@angular/common';
import { AddressService } from './services/address.service';
import { TransportadoraService } from './services/transportadora.service';
import { HttpClientModule } from '@angular/common/http';
import { TransporadoraRepository } from './repository/transporadora.repository';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'transportadora', component: TransportadoraComponent },
      { path: 'transportadora/:id', component: TransportadoraComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ContentComponent,
    RouterModule
  ],
  declarations: [
    TransportadoraComponent,
    ContentComponent,
    HomeComponent
  ],
  providers: [
    AddressService,
    TransportadoraService,
    TransporadoraRepository,
  ]
})
export class ContentRoutingModule { }
