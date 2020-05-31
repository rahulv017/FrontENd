import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCartService } from '../add-cart.service';
import { Products } from '../products';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(public router: Router, public cartS: AddCartService, public service: HomeServiceService) { }


  cart_items: Cart[];
  sum: number = 0;

  ngOnInit() {

    if (sessionStorage.getItem('user') == null) {
      alert('Please log in first!!!');
      this.router.navigate(['']);
    }
    else {
      this.service.getCartProducts().subscribe(response => this.fetch(response));
    }
    let i = 0;
    //this.cart_items.forEach(item => {this.sum=this.sum+parseInt(item.product.price)});
    //this.cart_items=this.cartS.getProducts();
  }

  fetch(response: Cart[]) {
    this.cart_items = response;
    console.log(response.length)
    let i = 0;
    for (i = 0; i < this.cart_items.length; i++) {
      this.sum = this.sum + parseInt(this.cart_items[i].product.price);
    }
  }

}
