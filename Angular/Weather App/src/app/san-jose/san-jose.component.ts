import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  public data;

  constructor(private _weatherService: WeatherService) { }

  getWeather(city:string){
    this._weatherService.getWeather(city)
      .then(data => this.data = data)
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.getWeather("San Jose, CA");
  }

}