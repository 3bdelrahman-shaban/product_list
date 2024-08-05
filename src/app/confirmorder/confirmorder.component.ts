import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {
  recipe: Recipe[] = [];
  ordertotal: number = 0;
  @Output() close = new EventEmitter<any>();

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
    this.ordertotal = this.recipe.reduce((total, item) =>
      total + (item.numoforder * item.price), 0);
  }

  removefronlist(index: number): void {
    this.recipe.splice(index, 1);
  }

  closeconfirmonly(): void {
    this.close.emit(null);
  }

  startneworder(): void {
    this.close.emit('start');
  }
}
