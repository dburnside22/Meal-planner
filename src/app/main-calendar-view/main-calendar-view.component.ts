import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calendar-view',
  templateUrl: './main-calendar-view.component.html',
  styleUrls: ['./main-calendar-view.component.scss']
})
export class MainCalendarViewComponent implements OnInit {

  week: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor() { }

  ngOnInit() {
  }

}
