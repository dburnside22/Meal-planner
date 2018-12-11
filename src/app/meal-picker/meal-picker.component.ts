import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';
import { MealItem } from '../meal-item.interface';

@Component({
  selector: 'app-meal-picker',
  templateUrl: './meal-picker.component.html',
  styleUrls: ['./meal-picker.component.scss']
})
export class MealPickerComponent implements OnInit {
  catagories = ['meats', 'veggies', 'dishes'];
  meats: string[] = [];
  veggies: string[] = [];
  dishes: string[] = [];
  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.catagories.forEach((catagory) => {
      this.mealsService.getMealsByCatagory(catagory).subscribe((mealItems: MealItem[]) => {
        mealItems.forEach((mealItem: MealItem) => {
          this[catagory].push(mealItem.name);
        });
      });
    });
  }

}
