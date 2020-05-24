import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  constructor() { }

  product = new Array<Products>();

  setProduct(data: Products) {
    this.product.push(data);

  }

  getProducts(): Products[] {
    let temp = this.product;
    return temp;
  }

}
