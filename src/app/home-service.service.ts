import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(public http:HttpClient) { }

  getFeatureProducts()
  {
    let url="http://localhost:3000/Products";
    return this.http.get(url);
  }
}
