import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { HomeServiceService } from '../home-service.service';
import { AddCartService } from '../add-cart.service';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private active:ActivatedRoute,private prodS:ProductService,private service:HomeServiceService,private cartS:AddCartService) { }


  product:Products;
  num_items: number=0;
  item_categories: Observable<Category[]>
  ngOnInit() {
    this.item_categories = this.service.getAllCategories();
    this.active.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let id1=parseInt(params.get('id1'));
      // alert(`Category Id is ${id}`);
      this.service.getProduct(id,id1).subscribe(response => this.fetchData(response));

    });
  }

  fetchData(data:Products)
  {
    console.log(data);
    this.product=data;
  }

  onAddCart(data: Products) {
    this.service.addToCart(data, this.num_items).subscribe();
    this.cartS.setProduct(data);
  }
}
