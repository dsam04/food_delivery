import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants-add-product',
  templateUrl: './restaurants-add-product.component.html',
  styleUrls: ['./restaurants-add-product.component.css']
})
export class RestaurantsAddProductComponent {
constructor(){}

submit(data:object){
  console.warn(data);
}
alert(){
  window.alert("Product Added!")
}
}
