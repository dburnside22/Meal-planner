import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';
import { Meal } from '../meal.interface';

@Component({
  selector: 'app-main-calendar-view',
  templateUrl: './main-calendar-view.component.html',
  styleUrls: ['./main-calendar-view.component.scss']
})
export class MainCalendarViewComponent implements OnInit {
  allMeals: Meal[];






  week: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Snacks'];
  meals;
  dayView = '';
  openDayView = false;
  allSelectedBoxes = [];
  searchBar = '';
  enteredMeal = '';

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.mealsService.listAllMeals().subscribe((meals: Meal[]) => {
      console.log('this is a meals', meals);
      this.allMeals = meals;
    });
  }

  openDay(dayObject) {
    this.dayView = dayObject.day;
    this.openDayView = !this.openDayView;
  }

  enterMeal() {
    this.enteredMeal = this.searchBar;
    this.searchBar = '';
  }
}
