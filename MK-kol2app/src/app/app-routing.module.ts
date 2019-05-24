import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrdersMKComponent} from './components/orders-mk/orders-mk.component';
import {OrdersDetailsMKComponent} from './components/orders-details-mk/orders-details-mk.component';



@NgModule({
  imports: [RouterModule.forRoot(this.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  routes: Routes = [
    {
      path: '',
      component: OrdersMKComponent
    },
    /*
    {
      path: '/:id',
      component: OrdersDetailsMKComponent
    }
    */
  ];

}
