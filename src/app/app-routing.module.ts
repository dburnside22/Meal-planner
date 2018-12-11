import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCalendarViewComponent } from './main-calendar-view/main-calendar-view.component';
import { MealPickerComponent } from './meal-picker/meal-picker.component';

const routes: Routes = [
  { path: '', component: MainCalendarViewComponent },
  { path: 'meal-picker', component: MealPickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
