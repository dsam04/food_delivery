import { ReturnStatement } from "@angular/compiler";
import { food } from "./food";

export class cartitem{
    constructor(Food:food){
        this.Food= Food;

    }


    Food:food;
    quantity:number = 1;
    get price(): number{
        return this.Food.price * this.quantity;
    }
}