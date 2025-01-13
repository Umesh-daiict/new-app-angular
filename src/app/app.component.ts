import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ShopingListComponent,RecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
