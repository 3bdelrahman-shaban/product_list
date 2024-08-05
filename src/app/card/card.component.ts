import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { isNgContent } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] // Corrected to styleUrls
})
export class CardComponent implements OnInit {
  recipe: Recipe[] = [];
  ordertotal: number = 0;
  confirmed:boolean=false;
  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    // Subscribe to recipe updates
    this.service.recipeupdated.subscribe((recipes: Recipe[]) => {
      this.recipe = recipes; // Update the recipe array
      this.calculateprice(); // Calculate price after updating the recipes
    });

    // Initialize recipe array and calculate price
    this.recipe = this.service.getrecipe();
    if (this.recipe.length > 0) {
      this.calculateprice();
    }
  }

  calculateprice(): void {
    // Initialize ordertotal to 0 before summing up
    this.ordertotal = this.recipe.reduce((total,item)=>
      total +(item.numoforder*item.price),0)
  }
  removefronlist(index:number){
    this.recipe.splice(index,1)
  }
  confirmorder(){
    this.confirmed=true
  }
  notconfirm(event:any){
    if(event==='start'){
      this.confirmed=false
      this.service.startnew()
    }
    else{
      this.confirmed=false
    }
  }
}
