import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   //loginForm:FormGroup;
  constructor(public login:Login) {
    

   }


  //login= new Login();


   
   onSave()
   {
     
   }
 
  

  ngOnInit() {
    

}
}

