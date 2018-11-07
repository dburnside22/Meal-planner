import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day-component',
  templateUrl: './calendar-day-component.component.html',
  styleUrls: ['./calendar-day-component.component.scss']
})
export class CalendarDayComponentComponent implements OnInit {
  @Input() day: string;
  constructor() { }

  ngOnInit() {
  }

}
