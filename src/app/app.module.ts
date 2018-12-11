import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCalendarViewComponent } from './main-calendar-view/main-calendar-view.component';
import { CalendarDayComponentComponent } from './calendar-day-component/calendar-day-component.component';
import { HttpClientModule } from '@angular/common/http';
import { IndividualDayViewComponent } from './individual-day-view/individual-day-view.component';
import { MealPickerComponent } from './meal-picker/meal-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCalendarViewComponent,
    CalendarDayComponentComponent,
    IndividualDayViewComponent,
    MealPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
