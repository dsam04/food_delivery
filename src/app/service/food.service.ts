import { Injectable } from '@angular/core';
import { food } from '../shared/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():food[]{
    return[
      {
        id:1,
        name:'pizza',
        cookTime:'25-30',
        price:110,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/pizza.jpeg',
        tags:['pizza','lunch'],
      },
      {
        id:2,
        name:'french fries',
        cookTime:'20-25',
        price:30,
        favorite:false,
        origins:['italy'],
        star:3.5,
        imageUrl:'/assets/frenchfries.jpeg',
        tags:['fry','fastfood'],
      },
      {
        id:3,
        name:'burger',
        cookTime:'20-30',
        price:30,
        favorite:false,
        origins:['italy'],
        star:3.5,
        imageUrl:'/assets/burger.jpeg',
        tags:['fastfood','lunch'],
      },
      {
        id:4,
        name:'chicken bolls',
        cookTime:'30-35',
        price:90,
        favorite:true,
        origins:['india'],
        star:3.5,
        imageUrl:'/assets/chickenbolls.jpeg',
        tags:['fry','fastfood','nonveg'],
      },
      {
        id:5,
        name:'frankie',
        cookTime:'15-20',
        price:40,
        favorite:true,
        origins:['india'],
        star:4.3,
        imageUrl:'/assets/frankie.jpg',
        tags:['fry','fastfood','veg'],
      },
      {
        id:6,
        name:'pav bhaji',
        cookTime:'30-35',
        price:60,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/pavbhaji.jpg',
        tags:['Lunch','fastfood','veg'],
      },
      {
        id:7,
        name:'vadapav',
        cookTime:'15-20',
        price:20,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/vadapav.jpg',
        tags:['fastfood','fry'],
      },
      {
        id:8,
        name:'sandwich',
        cookTime:'20-25',
        price:50,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/sandwich.jpg',
        tags:['veg'],
      },
      {
        id:9,
        name:'veg lolipop',
        cookTime:'25-30',
        price:60,
        favorite:true,
        origins:['india'],
        star:3.5,
        imageUrl:'/assets/veglolipop.jpeg',
        tags:['fry','fastfood'],
      },
      {
        id:10,
        name:'cold coffee',
        cookTime:'5-10',
        price:30,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/coffee.jpeg',
        tags:['colddrink'],
      },
      {
        id:11,
        name:'manchow soup',
        cookTime:'25-30',
        price:60,
        favorite:false,
        origins:['china'],
        star:3.5,
        imageUrl:'/assets/manchowsoup.jpeg',
        tags:['soup','fastfood'],
      },
      {
        id:12,
        name:'pasta',
        cookTime:'30-35',
        price:50,
        favorite:true,
        origins:['india'],
        star:4,
        imageUrl:'/assets/pasta.jpeg',
        tags:['fastfood'],
      },
    ];
  }
}
