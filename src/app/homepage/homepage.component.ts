import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service: HomeServiceService, private prodS: ProductService, private router: Router) { }
  // list_prod=ELE;
  items = new Array<Products[]>()
  item_categories: Observable<Category[]>
  ngOnInit() {
    this.service.getFeatureProducts().subscribe(response => this.fetch(response));
    this.item_categories = this.service.getAllCategories();

  }
  fetch(response) {
    this.items = response;
  }

  onView(data: Products) {
    //this.service.getProduct(data).subscribe();
    //this.prodS.setProd(data);
    console.log(data.product_id);
    console.log(data.category.id)
    this.router.navigate(['/product', data.category.id, data.product_id]);

  }

  onCategory(data: Category) {
    this.router.navigate(['/category', data.id]);
  }

}

// let ELE:Products[]=[
//     {"name":"Abhash Gaandu","desc":"Nalaayak","id":1,"price":2},
//     {"name":"Abhash Mc","desc":"Nalaayak","id":1,"price":3},
//     {"name":"Abhash Bc","desc":"Nalaayak","id":1,"price":4},
//     {"name":"Abhishek Gaandu","desc":"Nalaayak","id":1,"price":6},
//     {"name":"Abhishek Mc","desc":"Nalaayak","id":1,"price":8},
//     {"name":"Shreyansh Chutiya","desc":"Nalaayak","id":1,"price":10}
// ]


