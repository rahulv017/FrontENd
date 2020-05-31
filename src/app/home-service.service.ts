import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from './products';
import { Login } from './login';
import { catchError } from 'rxjs/operators'
import { UserLogin } from './user-login';
import { Category } from './category';
import { Cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(public http: HttpClient) { }

  getFeatureProducts(): Observable<Products[]> {
    let url = "http://139.59.60.250:4000/products";
    return this.http.get<Products[]>(url);
  }

  onSignUp(data: Login) {
    let url = "http://139.59.60.250:4000/customer";
    return this.http.post(url, data).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        console.error(err);
        return throwError(
          'Please enter correct credentials Recived error ' + err);
      }
    }))
  }

  onLogin(data: UserLogin): Observable<Login> {
    console.log(JSON.stringify(data));
    let url = `http://139.59.60.250:4000/home/${data.email}/${data.password}`;
    return this.http.get<Login>(url).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        console.error(err);
        return throwError(
          'Please enter correct credentials Recived error ' + err);
      }
    }))
  }

  getAllCategories(): Observable<Category[]> {
    let url = "http://139.59.60.250:4000/categories";
    return this.http.get<Category[]>(url);
  }

  getCategoryProducts(data: number): Observable<Products[]> {
    let url = `http://139.59.60.250:4000/categories/${data}/products`;
    return this.http.get<Products[]>(url);
  }

  addToCart(data: Products, items: number) {
    let url = `http://139.59.60.250:4000/customer/${sessionStorage.getItem('id')}/products/${data.product_id}/cart`;

    let JsonData = { "date": "2012-03-19T07:22Z", "amount": items };
    return this.http.post(url, JsonData);

  }

  getProduct(cat: number, prod: number): Observable<Products> {
    let url = `http://139.59.60.250:4000/categories/${cat}/products/${prod}`;
    return this.http.get<Products>(url);
  }

  getCartProducts(): Observable<Cart> {
    let url = `http://139.59.60.250:4000/customer/${sessionStorage.getItem('id')}/cart`;
    return this.http.get<Cart>(url);
  }

}
