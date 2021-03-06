import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { HomeServiceService } from '../home-service.service';
import { AddCartService } from '../add-cart.service';
import { Products } from '../products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private service: HomeServiceService, private cartS: AddCartService) { }
  user;
  item_categories: Observable<Category[]>
  ngOnInit() {
    this.user = sessionStorage.getItem('user');
    this.item_categories = this.service.getAllCategories();
  }

  onLogout() {
    console.log("Kuch bhi");
    sessionStorage.clear();
    this.user = null;
    this.cartS.product = null;
    location.reload();
    //this.router.navigate(['']);

  }

}
let ELE: Category[] = [
  { "id": 1, "name": "Shreyansh", "description": "Saste Nashe" },
  { "id": 2, "name": "Abhash", "description": "Mehenge Nashe Nashe" }
]