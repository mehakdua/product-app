import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  //view Child will be avilable on ngOnIt
product:Product =new Product();
brands$:Observable<Brand[]>;
@ViewChild('productForm',{static:true}) form:NgForm;
@ViewChild('productName',{static:true}) name:ElementRef ;
@ViewChild('productNameModel',{static:true}) pname:NgModel;
@ViewChild('productPrice',{static:true}) price:ElementRef ;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) {
   }

  ngOnInit() {
    //set focus n input element
    this.price.nativeElement.focus();
    const id = this.route.snapshot.params['id'];
    const source = this.route.snapshot.params['source'];
    console.log('source',source);
    if(id){
      this.productService.getProduct(id).subscribe(product=>{
        this.product = product;
      });
      console.log("edit")
    } else {
      console.log("new")
    }
    this.brands$ =this.productService.getBrands();
  }
  save(){
    if(this.form.pristine){
      alert("form not changed,not saving");
      return;
    }
    console.log('product details',this.product);
    this.productService.saveProduct(this.product).subscribe(savedProduct=>{
      console.log('saved',savedProduct);
      this.product =savedProduct;
      this.router.navigate(['/products',{source:'edit'}])
    })
  }

}
