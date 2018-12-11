import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from './meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  mealsUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  updateDay(meal: Meal): Observable<any> {
    return this.http.put(`${this.mealsUrl}meals/${meal.id}/`, meal);
  }

  listAllMeals(): Observable<any> {
    return this.http.get(`${this.mealsUrl}meals`);
  }

  getMealsByCatagory(foodCatagory: string): Observable<any> {
    return this.http.get(`${this.mealsUrl}${foodCatagory}`);
  }

}
