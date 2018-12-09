import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  mealsUrl = 'http://127.0.0.1:8000/meals/';

  constructor(private http: HttpClient) { }

  updateDay(day: string): Observable<any> {
    return this.http.put(this.mealsUrl, day);
  }

  listAllMeals(): Observable<any> {
    return this.http.get(this.mealsUrl);
  }

}
