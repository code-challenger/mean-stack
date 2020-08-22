import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  public data;

  constructor(private _weatherService: WeatherService) { }

  getWeather(city:string){
    this._weatherService.getWeather(city)
      .then(data => this.data = data)
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.getWeather("Dallas, TX");
  }

}
