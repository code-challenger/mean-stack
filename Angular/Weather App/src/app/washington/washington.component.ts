import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  public data;

  constructor(private _weatherService: WeatherService) { }

  getWeather(city:string){
    this._weatherService.getWeather(city)
      .then(data => this.data = data)
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.getWeather("Washington, DC");
  }

}
