import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule, RecipeItemComponent, RecipeDetailsComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
"https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&webp=true&resize=375,341"    ),
    new Recipe("Another Test Recipe", "This is simply a test", "https://thumbs.dreamstime.com/z/bombay-potato-curry-indian-food-29146242.jpg?ct=jpeg")
  ];
}
