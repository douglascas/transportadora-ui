import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { ContentRoutingModule } from './content/content-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContentRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
