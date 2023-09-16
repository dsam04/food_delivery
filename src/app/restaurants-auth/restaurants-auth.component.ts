import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-auth',
  templateUrl: './restaurants-auth.component.html',
  styleUrls: ['./restaurants-auth.component.css']
})
export class RestaurantsAuthComponent {
  showlogin = false;
  
  constructor(private router:Router){}
  signUp(data:object): void{
    console.warn(data)
    this.router.navigate(['restaurents-add-product'])
  }
  openlogin(){
    this.showlogin = true;
  }
  opensignup(){
    this.showlogin = false;
  }
  login(){
    window.alert("Login Succesfull !")
  }
  signup(){
    window.alert("SignUp Succesfull !")    
  }
}
