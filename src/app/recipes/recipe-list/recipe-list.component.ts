import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeName: string = 'A Test Recipe';
  recipeDesc: string = 'Test Description';
  recipeImage: string = '/assets/burger.jpg';

  recipes: Recipe[] = [
    new Recipe(this.recipeName, this.recipeDesc, this.recipeImage),
    new Recipe(this.recipeName, this.recipeDesc, this.recipeImage)
  ];

  constructor() {

  }

  ngOnInit() { }

}
