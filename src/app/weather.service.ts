import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = environment.apiUrl; // כתובת ה-API מ-environment
  private apiKey = environment.apiKey; // מפתח ה-API מ-environment

  constructor(private http: HttpClient) {}

  // פונקציה לקבלת מזג אוויר לפי שם עיר
  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }
}
