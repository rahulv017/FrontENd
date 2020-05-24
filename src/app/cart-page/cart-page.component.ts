import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCartService } from '../add-cart.service';
import { Products } from '../products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(public router:Router,public cartS:AddCartService) { }


    cart_items:Products[];
  ngOnInit() {

    if(sessionStorage.getItem('user')==null)
    {
      alert('Please log in first!!!');
      this.router.navigate(['']);
    }

    this.cart_items=this.cartS.getProducts();
  }

}
