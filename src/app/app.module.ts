import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsAuthComponent } from './restaurants-auth/restaurants-auth.component';
import { FormsModule } from '@angular/forms';
import { RestaurantsAddProductComponent } from './restaurants-add-product/restaurants-add-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsAuthComponent,
    RestaurantsAddProductComponent,
    UserAuthComponent,
    CartPageComponent,
    FoodpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap : [AppComponent]
 
})
export class AppModule { }
