import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Dojo Weather Forecast';

  private city: City = new City();

  private data;

  constructor(private _weatherService: WeatherService){}

  getWeather(city: string){
    this._weatherService.getWeather(city)
      .then( (data) => this.data = data)
      .catch( err => console.log(err));
  }

}
