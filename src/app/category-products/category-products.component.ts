import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { Products } from '../products';
import { AddCartService } from '../add-cart.service';
import { Category } from '../category';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  constructor(public active: ActivatedRoute, public service: HomeServiceService, public cartS: AddCartService,public router:Router,public prodS:ProductService) { }
  id;
  cat_items: Observable<Products[]>
  num_items: number=0;
  item_categories: Observable<Category[]>
  ngOnInit() {
    this.id = parseInt(this.active.snapshot.paramMap.get('id'));

    this.active.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      // alert(`Category Id is ${id}`);
      this.cat_items = this.service.getCategoryProducts(id);

    });
    this.item_categories = this.service.getAllCategories();



  }


  onAddCart(data: Products) {
    this.service.addToCart(data, this.num_items).subscribe();
    this.cartS.setProduct(data);
  }

  onView(data:Products)
  {
   // this.service.getProduct(data).subscribe();
    this.prodS.setProd(data);
    this.router.navigate(['/product',data.category.category_id,data.product_id]);

  }

}
