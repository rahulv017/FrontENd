import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CartPageComponent } from './cart-page/cart-page.component';



const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "product", component: ProductPageComponent },
  { path: "category/:id", component: CategoryProductsComponent },
  { path: "cart", component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
