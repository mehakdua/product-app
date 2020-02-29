import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  //dependency injection
  constructor(private cartService:CartService) {
    console.log("Cart component created");
   }

  ngOnInit() {
  }
  addItem(){
    const id =Math.ceil(Math.random() *1000);
    const cartItem = new CartItem();
    cartItem.id =id;
    cartItem.name = `Product ${id}`;
    cartItem.qty = 1;
    cartItem.price =Math.ceil(Math.random() *1000);
    this.cartService.addItem(cartItem);
  }
  clear(){
     this.cartService.empty();
  }
}
