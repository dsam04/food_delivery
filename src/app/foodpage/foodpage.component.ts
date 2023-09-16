import { Component } from '@angular/core';
import { food } from '../shared/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {

  constructor(private activatedRouter: ActivatedRoute, 
    private foodServices:FoodService, private carService:CartService,
    private router:Router){
    activatedRouter.params.subscribe((params)=>{
      if(params['id'])
      this.Food = foodServices.getFoodById(params['id'])
    })
  }
  Food!:food;

  addToCart(){
    this.carService.addTocart(this.Food);
    this.router.navigateByUrl('/cart-page')
  }
}
