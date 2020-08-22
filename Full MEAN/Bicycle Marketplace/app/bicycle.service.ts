import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }

  newListing(bike){
    return this._http.post("/api/newBike", bike)
    .map( data => data.json())
    .toPromise();
  }

  allBikes(){
    return this._http.get("/api/allBikes")
    .map( data => data.json())
    .toPromise();
  }

  userBikes(){
    return this._http.get("/api/userBikes")
    .map( data => data.json())
    .toPromise();
  }

  updateBike(bike_id, bicycle){
    console.log("in bicycle service");
    console.log(bike_id, bicycle);
    return this._http.patch("/api/updateBike/" + bike_id, bicycle)
    .map( data => data.json())
    .toPromise();
  }

  deleteBike(bike_id){
    return this._http.delete("/api/deleteBike/" + bike_id)
    .map( data => data.json())
    .toPromise();
  }

  //used custom pipe: filter instead of using search method
  search(search){
    console.log("In search method in Bicycle Service");
    return this._http.post("/api/bikeSearch", search)
    .map( data => data.json())
    .toPromise();
  }
}
