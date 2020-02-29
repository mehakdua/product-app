import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import {CartService} from './services/cart.service';
import { SharedModule } from '../shared/shared.module';
const routes:Route[] = [
{path:'cart',component:CartComponent}

]
@NgModule({
  declarations: [
    CartComponent, 
    CartListComponent, 
    CartSummaryComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[
    CartComponent
  ],
  providers:[ //ng 2,4,5
    //for ng 6 onwards, not needed
    CartService
  ]
})
export class CartModule { }
