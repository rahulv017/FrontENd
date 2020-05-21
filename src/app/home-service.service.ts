import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from './products';
import { Login } from './login';
import {catchError} from 'rxjs/operators'
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(public http:HttpClient) { }

  getFeatureProducts():Observable<Products[]>
  {
    let url="http://localhost:3000/Products";
    return this.http.get<Products[]>(url);
  }

  onSignUp(data:Login)
  {
      let url="http://localhost:3000/signup";
      return this.http.post(url,data).pipe(catchError(err =>{
               if(err instanceof HttpErrorResponse)
               {
                 console.error(err);
                 return throwError(
                   'Please enter correct credentials Recived error '+err);
               }
      }))
  }

  onLogin(data:UserLogin)
  {
    let url="http://localhost:3000/login";
      return this.http.post(url,data).pipe(catchError(err =>{
               if(err instanceof HttpErrorResponse)
               {
                 console.error(err);
                 return throwError(
                   'Please enter correct credentials Recived error '+err);
               }
      }))
  }
}
