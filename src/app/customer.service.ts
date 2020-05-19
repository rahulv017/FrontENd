import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  saveCustmoer(data:Customer)
  {
      let url="https://localhost:8443/signup";
        return this.http.post<String>(url,data);
  }

  signInCustmoer(username,password)
  {
      var data={'username':username, 'password':password};
      let url="https://localhost:8443/signup";
        return this.http.post<String>(url,data);
  }
}
