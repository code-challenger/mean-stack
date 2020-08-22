import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  public data;

  constructor(private _weatherService: WeatherService) { }

  getWeather(city:string){
    this._weatherService.getWeather(city)
      .then(data => this.data = data)
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.getWeather("Seattle, WA");
  }

}
