import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.interface';

@Component({
  selector: 'app-calendar-day-component',
  templateUrl: './calendar-day-component.component.html',
  styleUrls: ['./calendar-day-component.component.scss']
})
export class CalendarDayComponentComponent implements OnInit {
  @Input() meal: Meal;
  @Output() openDayView: EventEmitter<object> = new EventEmitter<object>();
  selectedBoxes = [];
  breakfast = '';
  lunch = '';
  dinner = '';

  constructor() { }

  ngOnInit() {
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

  toggleSelect(meal: string) {
    const indexOfMeal = this.selectedBoxes.indexOf(meal);
    if (indexOfMeal === -1) {
      this.selectedBoxes.push(meal);
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
      this[box] = this.meal;
    });
    this.selectedBoxes = [];
  }



}
