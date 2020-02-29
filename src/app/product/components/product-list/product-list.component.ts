import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/cart/models/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$:Observable<Product[]>;
  fieldName:string;
  expectedValue:number;
  operator:string;
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
  addToCart(product){
  
    let cartItem =new CartItem();
    cartItem.id=product.id;
    cartItem.name=product.name;
    cartItem.qty=1;
    cartItem.price=product.price;
    this.cartService.addItem(cartItem);
  }
  deleteFromProduct(id){
    this.productService.deletePrduct(id).subscribe(obj=>{
      this.products$ = this.productService.getProducts();  
    })
  }
}
