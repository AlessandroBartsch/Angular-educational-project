import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NovaTransferenciaComponent } from './nova-trasferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import lacalePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(lacalePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
