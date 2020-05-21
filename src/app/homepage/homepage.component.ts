import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:HomeServiceService,private prodS:ProductService,private router:Router) { }
  // list_prod=ELE;
   items:Observable<any>;
  ngOnInit() {
    this.items=this.service.getFeatureProducts();
  }

  onView(data:Products)
  {
    this.prodS.setProd(data);
    this.router.navigate(['/product']);

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
