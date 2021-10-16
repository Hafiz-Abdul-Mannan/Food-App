import { Food } from "./food.model";

export class CartItem {
    food: Food;
    quantity: number;
    constructor(food: Food) {
        this.food = food;
    }
    get price(): number {
        return this.food.price * this.quantity;
    }
}