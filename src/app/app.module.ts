import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiServService } from './api-serv.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
