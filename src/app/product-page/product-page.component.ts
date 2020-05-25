import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { HomeServiceService } from '../home-service.service';
import { AddCartService } from '../add-cart.service';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private prodS:ProductService,private service:HomeServiceService,private cartS:AddCartService) { }


  product=this.prodS.getProd();
  num_items: number=0;
  item_categories: Observable<Category[]>
  ngOnInit() {
    this.item_categories = this.service.getAllCategories();
  }

  onAddCart(data: Products) {
    this.service.addToCart(data, this.num_items).subscribe();
    this.cartS.setProduct(data);
  }
}
