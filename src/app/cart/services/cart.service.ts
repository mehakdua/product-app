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
  storage:Storage=window.localStorage;
 // storage:Storage=window.sessionStorage;
  public amount$:BehaviorSubject<number> =new BehaviorSubject(this._amount);
  public count$:BehaviorSubject<number> =new BehaviorSubject(this._count);
  public cartItems$:BehaviorSubject<CartItem[]> =new BehaviorSubject(this._cartItems);
  constructor() { 
    console.log("CartService created");
    const strData = this.storage.getItem("cartItems");
    if(strData){
      //FIXME:Array of object to array f cratitem
      this._cartItems =JSON.parse(strData);
    }
    window.onstorage = () => {
      // When local storage changes, dump the list to
      // the console.
      console.log("on storage");
      const strData = this.storage.getItem("cartItems");
      if(strData){
        //FIXME:Array of object to array f cratitem
        let newArr = JSON.parse(strData);
        let newItems:CartItem[]=[];
        for(let item of newArr){
          let obj = this._cartItems.find(x=>x.id== item.id);
          if(!obj){
            newItems.push(item);
          }
        }
        for(let j of newItems){
       //   this._cartItems.push(j);
        }
        //this._cartItems.splice(0, this._cartItems.length, JSON.parse(strData));
        this._cartItems =JSON.parse(strData);
      }  
    }
  }
 
  get cartItems(){
    return this._cartItems;
  }
  set cartItems(items:CartItem[]){
    this._cartItems = items;
    this.cartItems$.next(items);
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
    this.storage.setItem("cartItems",JSON.stringify(this._cartItems));
    this.cartItems = this._cartItems;
  }
  removeItem(id:number){
    const index = this._cartItems.findIndex(item=>item.id === id);
    this._cartItems.splice(index,1);  //we can use this.cartItems as well
    this.calculate();
    this.storage.setItem("cartItems",JSON.stringify(this._cartItems));
  }
  empty() {
   // this._cartItems =[];
    this._cartItems.splice(0,this._cartItems.length);
    this.calculate();
    this.storage.removeItem("cartItems");
  }
}
