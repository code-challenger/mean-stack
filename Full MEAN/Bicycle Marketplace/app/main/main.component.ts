import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../user';
import { Bicycle } from './../bicycle';
import { UserService } from './../user.service';
import { BicycleService } from './../bicycle.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: User = new User();
  user_login: User = new User();
  errors = [];
  bicycles: Array<Bicycle>;
  random: number;
  randomBike: Bicycle;
  login_errors={status:false, message:[]};
  attempt: number = 0;
  tried:boolean =false;
  time: Date = new Date();
  timeBlock: number;
  

  constructor(private _userService:UserService, private _bicycleService:BicycleService, private _router:Router) { }


  ngOnInit() {
    this.getBikes()
  }

  getBikes(){
    this._bicycleService.allBikes()
    .then( bicycles => {
      this.bicycles = bicycles;
      this.random = Math.floor((Math.random() * this.bicycles.length));
      this.randomBike = this.bicycles[this.random];
      console.log("Random Bike of the Day is:", this.randomBike);
    })
    .catch(err => {
      console.log(err);
    })
  }

  register(){
    this._userService.register(this.user)
    .then( data => this._router.navigate(["manager"]))
    .catch( err => this.errors = JSON.parse(JSON.stringify(err._body || null)))
  }

  login(){
    this.tried = true;
    let currentTime = new Date();
    console.log("current time is", currentTime);
    console.log("start time", this.time);
    let diff = Math.abs(currentTime.getTime() - this.time.getTime());
    console.log("difference", diff);
    let timeLimit = Math.floor(diff/60/1000);
    this.timeBlock = timeLimit;

    console.log(this.login_errors.message.length);
    this._userService.login(this.user_login)
    .then( data => this._router.navigate(["manager"]))
    .catch( err => {
      this.errors = JSON.parse(JSON.stringify(err._body || null));
      this.login_errors.status = true;
      this.login_errors.message.push(err);
    })
  }
}
    
