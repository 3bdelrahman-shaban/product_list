import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Corrected to styleUrls
})
export class ListComponent {
  constructor(private service: RecipeService) {}

  productlist: Recipe[] = [
    {
      imgpath: 'https://freshberries.com.au/wp-content/uploads/2021/04/waffles-1.png',
      fname: 'waffle',
      lname: 'Waffle with Berries',
      price: 6.50,
      numoforder:0
    },
    {
      imgpath: 'https://freshberries.com.au/wp-content/uploads/2021/04/waffles-1.png',
      fname: 'Crème Brûlée',
      lname: 'Vanilla Bean Crème Brûlée',
      price: 7.00,
      numoforder:0
    },
    {
      imgpath: 'https://freshberries.com.au/wp-content/uploads/2021/04/waffles-1.png',
      fname: 'Macaron',
      lname: 'Macaron Mix of Five',
      price: 8.00,
      numoforder:0
    },
    {
      imgpath: 'https://freshberries.com.au/wp-content/uploads/2021/04/waffles-1.png',
      fname: 'Baklava',
      lname: 'Pistachio Baklava',
      price: 4.00,
      numoforder:0
    }
  ];

  addtoorder(i: number): void {
    this.service.orderlist(this.productlist[i]);
  }
}
