import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit ,OnDestroy{
  amount:number;
  count:number;
  amountSubscription:Subscription;
  countSubscription:Subscription;
  constructor(private cartService:CartService) {
   // this.amount = this.cartService.amount;
    //this.count = this.cartService.count;
    
   }

  ngOnInit() {
    this.amountSubscription = this.cartService.amount$.subscribe((amount)=>{
      console.log("summary subscriber",amount);
      this.amount =amount
    });
    this.countSubscription = this.cartService.count$.subscribe((count)=>{
      console.log("summary subscriber",count);
      this.count = count;
    });
  }
  ngOnDestroy(){
    console.log("summary destroyed");
    this.amountSubscription.unsubscribe();
    this.countSubscription.unsubscribe();

  }

}
