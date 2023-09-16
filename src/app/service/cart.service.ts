import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { food } from '../shared/food';
import { cartitem } from '../shared/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart= new Cart();
  constructor() { }
  addTocart(Food:food):void{
    let cartItem = this.cart.items.find(item => item.Food.id === Food.id)
    if(cartItem){
      this.changeQuantity(Food.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new cartitem(Food));
  }
  removefromCart(FoodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.Food.id!= FoodId)
  }
  changeQuantity(quantity: number, FoodId:number){
    let cartItem = this.cart.items.find(item => item.Food.id === FoodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
