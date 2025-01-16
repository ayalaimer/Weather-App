import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule]
})
export class WeatherComponent {
  city: string = ''; // העיר שהמשתמש מזין
  weatherData: any; // נתוני מזג האוויר שיחזרו מה-API

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (this.city) {
      this.weatherService.getWeatherByCity(this.city).subscribe(
        (data : any) => {
          this.weatherData = data; // שמירת התוצאה
        },
        (error : any) => {
          console.error('Error fetching weather data:', error); // טיפול בשגיאה
        }
      );
    }
  }
}
