import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { OrdersMKComponent } from './components/orders-mk/orders-mk.component';
import { OrdersItemMKComponent } from './components/orders-item-mk/orders-item-mk.component';
import { OrdersDetailsMKComponent } from './components/orders-details-mk/orders-details-mk.component';
import {MK24052019Service} from './services/mk-24052019.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersMKComponent,
    OrdersItemMKComponent,
    OrdersDetailsMKComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MK24052019Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
