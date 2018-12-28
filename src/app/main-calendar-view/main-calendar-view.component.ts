import { Component, OnInit, ViewChild, SimpleChange } from '@angular/core';
import { MealsService } from '../meals.service';
import { Meal } from '../meal.interface';
import { MealPickerComponent } from '../meal-picker/meal-picker.component';

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

  @ViewChild(MealPickerComponent) mealpicker: MealPickerComponent;

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.mealsService.listAllMeals().subscribe((meals: Meal[]) => {
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

  openMealPicker() {
    this.mealpicker.openMealPickerModal();
  }

  populateSearchBar(items) {
    console.log('it worked?', items);
    items.forEach((item) => {
      this.searchBar = `${this.searchBar} + ${item}`;
    });
  }
}
