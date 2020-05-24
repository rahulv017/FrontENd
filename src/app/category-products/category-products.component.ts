import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { Products } from '../products';
import { AddCartService } from '../add-cart.service';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  constructor(public active: ActivatedRoute, public service: HomeServiceService,public cartS:AddCartService) { }
  id;
  cat_items: Observable<Products[]>
  num_items:number;
  ngOnInit() {
    this.id = parseInt(this.active.snapshot.paramMap.get('id'));
    alert(`Customer Id is ${this.id}`);
    this.cat_items = this.service.getCategoryProducts(this.id);



  }

  onAddCart(data:Products)
  {
    this.service.addToCart(data,this.num_items).subscribe();
      this.cartS.setProduct(data);
  }

}
