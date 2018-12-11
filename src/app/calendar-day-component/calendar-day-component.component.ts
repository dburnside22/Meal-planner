import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Meal } from '../meal.interface';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-calendar-day-component',
  templateUrl: './calendar-day-component.component.html',
  styleUrls: ['./calendar-day-component.component.scss']
})
export class CalendarDayComponentComponent implements OnInit {
  @Input() meal: Meal;
  @Input() enteredMeal: string;
  @Output() openDayView: EventEmitter<object> = new EventEmitter<object>();
  selectedBoxes = [];
  breakfast = '';
  lunch = '';
  dinner = '';

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.enteredMeal !== '' && this.selectedBoxes.length > 0) {
      this.addMealToSelected();
    }
  }

  openDay() {
    this.openDayView.emit(
      {
        day: this.meal.day,
        breakfast: this.breakfast,
        lunch: this.lunch,
        dinner: this.dinner,
      }
    );
  }

  toggleSelect(mealTime: string) {
    const indexOfMeal = this.selectedBoxes.indexOf(mealTime);
    if (indexOfMeal === -1) {
      this.selectedBoxes.push(mealTime);
    } else {
      this.selectedBoxes.splice(indexOfMeal, 1);
    }
  }

  isBoxSelected(meal: string) {
    const indexOfMeal = this.selectedBoxes.indexOf(meal);
    if (indexOfMeal !== -1) {
      return 'border border-success';
    }
  }

  addMealToSelected() {
    this.selectedBoxes.forEach((box) => {
      this.meal[box] = this.enteredMeal;
    });
    this.mealsService.updateDay(this.meal).subscribe();
    this.selectedBoxes = [];
  }



}
