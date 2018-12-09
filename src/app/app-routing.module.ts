import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCalendarViewComponent } from './main-calendar-view/main-calendar-view.component';

const routes: Routes = [
  { path: '', component: MainCalendarViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
