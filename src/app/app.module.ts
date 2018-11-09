import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCalendarViewComponent } from './main-calendar-view/main-calendar-view.component';
import { CalendarDayComponentComponent } from './calendar-day-component/calendar-day-component.component';
import { IndividualCalendarViewComponent } from './individual-calendar-view/individual-calendar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCalendarViewComponent,
    CalendarDayComponentComponent,
    IndividualCalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
