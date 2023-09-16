import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { cartitem } from '../shared/cartitem';
import { Cart } from '../shared/cart';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;
  constructor(private cartservice:CartService){
    this.setCart();

   }

  setCart(){
    this.cart = this.cartservice.getCart();
  }
  removeFromCart(cartItem: cartitem){
    this.cartservice.removefromCart(cartItem.Food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartitem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.Food.id, quantity);
    this.setCart();
  }
}
