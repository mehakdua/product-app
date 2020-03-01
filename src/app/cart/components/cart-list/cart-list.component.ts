import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartItems:CartItem[];
  //cartItems$:Observable<CartItem[]>;
  constructor(private cartService:CartService) { 
    //this.cartItems$  = this.cartService.cartItems$;
   this.cartItems  = this.cartService.cartItems;
    
    
  }

  ngOnInit() {
    
  }
  removeItem(id:number){
    this.cartService.removeItem(id);
  }

}
