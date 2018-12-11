import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from './meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  mealsUrl = 'http://127.0.0.1:8000/meals/';

  constructor(private http: HttpClient) { }

  updateDay(meal: Meal): Observable<any> {
    return this.http.put(`${this.mealsUrl}${meal.id}/`, meal);
  }

  listAllMeals(): Observable<any> {
    return this.http.get(this.mealsUrl);
  }

}
