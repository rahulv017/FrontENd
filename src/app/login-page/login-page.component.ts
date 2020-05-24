import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../login';
import { HomeServiceService } from '../home-service.service';
import { UserLogin } from '../user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   //loginForm:FormGroup;
  constructor(public login:Login,public service:HomeServiceService,public user:UserLogin,public router:Router) {
    

   }


  //login= new Login();


   onSignUp()
   {
     this.service.onSignUp(this.login).subscribe(response => console.log(response),err => alert(err)
     );
   }

   onLogin()
   {
    this.service.onLogin(this.user).subscribe(response =>{ if(response!=null){sessionStorage.setItem('user',this.user.email)
                                                                               sessionStorage.setItem('id',response.id.toString())
                                                                       alert('Logged IN');
                                                                        this.router.navigate(['']);}
                                                                      else{
                                                                        alert(`Enter credentials correctly`);
                                                                      } }  ,err => alert(err)
    );
   }
   onSave()
   {
     
   }
 
  

  ngOnInit() {
    

}
}

