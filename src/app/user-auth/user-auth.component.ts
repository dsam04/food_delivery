import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showlogin = true;
  constructor(private route: Router){}
  signup(data:any){
    console.warn(data);
    this.route.navigate(['/'])
  }
  Signup(){
    window.alert("SignUp Succesfull !")
  }
  Login(){
    window.alert("Login Succesfull !")
  }
  openlogin()
{
  this.showlogin=true;
}
opensignup(){
  this.showlogin = false;
}
}

