import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../home/home.component.scss']
})
export class HeaderComponent implements OnInit {
  count$:Observable<number>;
  amount$:Observable<number>;
  constructor(private cartService:CartService) { 
    this.amount$ = this.cartService.amount$;
    this.count$ = this.cartService.count$;
  }
  ngOnInit() {
  }

}
