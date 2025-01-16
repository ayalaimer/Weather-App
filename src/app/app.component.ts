import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule , WeatherComponent]
 })
export class AppComponent {
  title = 'weather-app';
}
