import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from './products';
import { Login } from './login';
import { catchError } from 'rxjs/operators'
import { UserLogin } from './user-login';
import { Category } from './category';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(public http: HttpClient) { }

  getFeatureProducts(): Observable<Products[]> {
    let url = "http://localhost:4000/products";
    return this.http.get<Products[]>(url);
  }

  onSignUp(data: Login) {
    let url = "http://localhost:4000/customer";
    return this.http.post(url, data).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        console.error(err);
        return throwError(
          'Please enter correct credentials Recived error ' + err);
      }
    }))
  }

  onLogin(data: UserLogin): Observable<Customer> {
    console.log(JSON.stringify(data));
    let url = `http://localhost:4000/home/${data.email}/${data.password}`;
    return this.http.get<Customer>(url).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        console.error(err);
        return throwError(
          'Please enter correct credentials Recived error ' + err);
      }
    }))
  }

  getAllCategories(): Observable<Category[]> {
    let url = "http://localhost:4000/categories";
    return this.http.get<Category[]>(url);
  }

  getCategoryProducts(data: number): Observable<Products[]> {
    let url = `http://localhost:4000/categories/${data}/products`;
    return this.http.get<Products[]>(url);
  }
}
