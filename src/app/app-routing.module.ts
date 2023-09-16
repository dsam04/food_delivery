import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsAuthComponent } from './restaurants-auth/restaurants-auth.component';
import { RestaurantsAddProductComponent } from './restaurants-add-product/restaurants-add-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:HomeComponent,
    path:'search/:searchItem',
  },
  {
    component:RestaurantsAuthComponent,
    path:'restaurents-auth',
  },
  {
    component:RestaurantsAddProductComponent,
    path:'restaurents-add-product',
  },
  {
    component:UserAuthComponent,
    path:'user-auth',
  },
  {
    component:FoodpageComponent,
    path:'food/:id',
  },
  {
    component:CartPageComponent,
    path:'cart-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
