import { Component } from '@angular/core';
import { ShopingListEditComponent } from "./shoping-list-edit/shoping-list-edit.component";
import { CommonModule } from '@angular/common';
import { ingredient } from './ingredient.model';

@Component({
  selector: 'app-shoping-list',
  imports: [ShopingListEditComponent, CommonModule],
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent {
  ingredients: ingredient[] = [new ingredient('Apples', 5), new ingredient('Tomatoes', 10)];
}
