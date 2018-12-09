import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-individual-day-view',
  templateUrl: './individual-day-view.component.html',
  styleUrls: ['./individual-day-view.component.scss']
})
export class IndividualDayViewComponent implements OnInit {
  @Input() day: string;
  @Output() closeDayView: EventEmitter<string> = new EventEmitter<string>();
  selectedBoxes: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  openDay() {
    this.closeDayView.emit(this.day);
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
}
