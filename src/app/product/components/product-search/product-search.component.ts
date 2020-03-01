import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import {filter,map,debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  products$:Observable<Product[]>;
  searchText:string;
  group:FormGroup;
  searchControl:FormControl;
  constructor(private productService:ProductService,private builder:FormBuilder) { 
    this.searchControl = new FormControl('samsung');
    this.group=this.builder.group({
      //html binding name :control obj
      'search':this.searchControl
    })

  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe((filter(value=>!!value)))
    .pipe(map(value=>value.trim().toLowerCase()))
    .pipe(debounceTime(500)).subscribe(value=> {
      console.log("*"+value+"*");
      this.searchText =value;
      this.products$ = this.productService.searchProducts(this.searchText);
    })
   // this.products$ = this.productService.getProducts();
  }
  reset(){
    this.searchControl.setValue('');
  }

}
