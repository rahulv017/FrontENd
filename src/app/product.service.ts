import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  prod:Products;

  getProd():Products
  {
      let temp=this.prod;
    //  this.prod=undefined;
      return temp;
  }

  setProd(data:Products)
  {
       this.prod=data;
  }

}
