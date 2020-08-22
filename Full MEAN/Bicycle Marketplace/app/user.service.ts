import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  register(user){
    return this._http.post("/api/register", user)
    .map( data => data.json())
    .toPromise();
  }

  login(user){
    return this._http.post("/api/login", user)
    .map( data => data.json())
    .toPromise();
  }

  getSession(){
    return this._http.get("/api/session")
    .map( data => data.json())
    .toPromise();
  }

  logout(){
    return this._http.get("/api/logout")
    .map( data => data.json())
    .toPromise();
  }

  find(){
    return this._http.get("/api/user")
    .map( data => data.json())
    .toPromise();
  }

  findCreator(creatorId){
    console.log("getting contact info...");
    console.log(creatorId);
    return this._http.post("/api/bikeCreator", {creatorId:creatorId})
    .map( data => data.json())
    .toPromise();

  }



}
