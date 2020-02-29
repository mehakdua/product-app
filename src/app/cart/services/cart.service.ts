import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import {Subject,BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems:CartItem[] =[];
  private _amount = 0;
  private _count = 0;

  public amount$:BehaviorSubject<number> =new BehaviorSubject(this._amount);
  public count$:BehaviorSubject<number> =new BehaviorSubject(this._count);
  constructor() { 
    console.log("CartService created");
  }
  get cartItems(){
    return this._cartItems;
  }
  set cartItems(items:CartItem[]){
    this._cartItems = items;
  } 
  get amount(){
    return this._amount;
  }
  set amount(amount:number){
    this._amount = amount;
    //publish the value
    this.amount$.next(amount);
  } 
  get count(){
    return this._count;
  }
  set count(count:number){
    this._count = count;
    this.count$.next(count);
  } 

  calculate() {
    let amount = 0;
    let count  = 0;
    for(let cartItem of this._cartItems){
      amount+= cartItem.price * cartItem.qty;
      count += cartItem.qty;
    }
    //call setter functions
    this.amount = amount;
    this.count = count;
  }

  addItem(cartItem:CartItem) {
    this._cartItems.push(cartItem);
    this.calculate();
  }
  removeItem(id:number){
    const index = this._cartItems.findIndex(item=>item.id === id);
    this._cartItems.splice(index,1);  //we can use this.cartItems as well
    this.calculate();
  }
  empty() {
   // this._cartItems =[];
    this._cartItems.splice(0,this._cartItems.length);
    this.calculate();
  }
}
