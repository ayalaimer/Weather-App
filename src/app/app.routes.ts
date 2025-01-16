import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' }, // ברירת מחדל לנווט ל-weather
  { path: 'weather', component: WeatherComponent } // הצגת WeatherComponent כאשר הנתיב הוא /weather
];
