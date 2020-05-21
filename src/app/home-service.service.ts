import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

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
}
