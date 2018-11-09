import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCalendarViewComponent } from './main-calendar-view/main-calendar-view.component';
import { IndividualCalendarViewComponent } from './individual-calendar-view/individual-calendar-view.component';

const routes: Routes = [
  { path: '', component: MainCalendarViewComponent },
  { path: 'calendar-view', component: IndividualCalendarViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
