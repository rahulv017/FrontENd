import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Login } from './login';
import { ProductPageComponent } from './product-page/product-page.component';
import { UserLogin } from './user-login';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    CategoryProductsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [Customer, Login, UserLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
