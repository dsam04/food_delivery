import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsAuthComponent } from '../restaurants-auth/restaurants-auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType:string = 'default';
  constructor(private route : Router){}

  searchitem:string='';

  ngOnInit(){

    this.route.events.subscribe((val:any) =>{
      
      if(val.url){
        console.warn(val.url);
        if(val.url == '/restaurents-add-product'){
          this.menuType = '/restaurents-add-product';
        }
        else{
          this.menuType = 'default';
        }
      }
    });
    
  }
  logout(){
    this.route.navigate(['/'])
    window.alert("You have been logged out!")
  }
}
