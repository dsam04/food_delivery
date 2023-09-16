import { Component,OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { food } from '../shared/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:food[]=[];
  constructor(private fs:FoodService, private router:ActivatedRoute){}

  ngOnInit():void{

    this.router.params.subscribe(params =>{
      if(params['searchItem']){
      this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))}
      else
      this.foods = this.fs.getAll();
    })


    
      
    }
  
}
