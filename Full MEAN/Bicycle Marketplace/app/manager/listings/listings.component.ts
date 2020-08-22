import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Bicycle } from './../../bicycle';
import { BicycleService } from './../../bicycle.service';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  new_bike = new Bicycle();
  errors = [];
  bicycle: Bicycle;
  userBikes: Array<Bicycle>;
  userId: string;

  constructor(private _userService:UserService, private _bicycleService:BicycleService, private _router:Router) { }

  ngOnInit() {
    this._userService.getSession()
    .then( data => {
      console.log(data);
      this.userId = data._id;
      this.getUserBikes();
    })
    .catch( err => this.errors = err);
  }
  
  createBike(){
    this._bicycleService.newListing(this.new_bike)
    .then( data => this.getUserBikes() )
    .catch( err => this.errors = err)
    this.new_bike = new Bicycle();
  }

  getUserBikes(){
    this._bicycleService.userBikes()
    .then( data => this.userBikes = data)
    .catch( err => this.errors = err);
  }

//is it confusing the passed in bicycle with the empty variable above?
  updateBike(bike_id, bicycle){
    this._bicycleService.updateBike(bike_id, bicycle)
    .then( data => this.getUserBikes() )
    .catch( err => this.errors = err);
    
  }

  deleteBike(bike_id){
    this._bicycleService.deleteBike(bike_id)
    .then( data => this.getUserBikes() )
    .catch( err => this.errors = err);
  }
  

}
