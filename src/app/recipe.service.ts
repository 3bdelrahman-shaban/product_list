import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  recipeupdated=new Subject<Recipe[]>

  constructor() { }

  orderlist(order: Recipe): void {
    // Flag to check if the order exists
    let found = false;
  
    // Iterate over the existing recipes
    for (const item of this.recipes) {
      // Check if the order already exists based on `fname` and `lname`
      if (item.fname === order.fname && item.lname === order.lname) {
        item.numoforder += 1;
        found = true; 
        break; 
      }
    }

    if (!found) {
      order.numoforder = 1;
      this.recipes.push(order);
    }

    this.recipeupdated.next(this.recipes.slice());
  }
  

  getrecipe(){
    return this.recipes.slice()
  }
  startnew(){
    this.recipes=[]
    this.recipeupdated.next(this.recipes.slice())
  }
}
