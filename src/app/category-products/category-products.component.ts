import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { Products } from '../products';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  constructor(public active: ActivatedRoute, public service: HomeServiceService) { }
  id;
  cat_items: Observable<Products[]>
  ngOnInit() {
    this.id = parseInt(this.active.snapshot.paramMap.get('id'));
    alert(`Customer Id is ${this.id}`);
    this.cat_items = this.service.getCategoryProducts(this.id);



  }

}
