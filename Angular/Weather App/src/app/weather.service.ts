import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  private api: string = "http://api.openweathermap.org/data/2.5/weather?q=";

  private key: string = "&APPID=8d1957e29b08973769665d59be1aa765";

  constructor(private _http: Http) { }

  getWeather(city: string){
    return this._http.get(this.api+city+this.key)
      .map(data => data.json())
      .toPromise();
  }

}
