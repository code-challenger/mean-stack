import { Component, OnInit } from '@angular/core';
import { Bicycle } from './../../bicycle';
import { BicycleService } from './../../bicycle.service';
import { Router} from '@angular/router';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { FilterPipe } from './../../filter.pipe';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  bicycles: Array<Bicycle>;
  user: User;
  errors = [];
  search = {};
  searchBicycles = [];
  userId: string;
  searchString: string = "";
  display: boolean = false;
  contact = {name: "", email:""};

  constructor(private _bicycleService:BicycleService, private _userService:UserService, private _router:Router) {
   }

  ngOnInit() {
    this.getBikes();
    this._userService.getSession()
    .then((user) =>{
       console.log(user.first_name);
       this.userId = user._id;
    })
    .catch( err => {
      console.log(err);
    })

  }

  getBikes(){
    return this._bicycleService.allBikes()
    .then( data => {
      this.bicycles = data;
      console.log(data);
      for(let bike of this.bicycles){
      }
    })
    .catch( err => {
      console.log(err);
    })
  }

  alert(creatorId){
    console.log("creator id is:", creatorId);
    this.display = true;
    this._userService.findCreator(creatorId)
    .then( (contact) => {
      console.log("Bike was created by " + contact.first_name);
      this.contact.name = contact.first_name;
      this.contact.email = contact.email;
      let modal = document.getElementById('contactModal');
      modal.style.display = "block";
    })
    .catch( err => {
      console.log(err);
    })
    
  }

  closeAlert(){
    let modal = document.getElementById('contactModal');
    modal.style.display = "none";
  }

  deleteBike(id, i){
    return this._bicycleService.deleteBike(id)
    .then( bike => {
      this.bicycles.splice(i, 1)
    })
    .catch(err => {
      console.log(err);
    })
  }

  //used custom pipe: filter instead
  // bikeSearch(){
  //   console.log("current search:", this.search);
  //   return this._bicycleService.search(this.search)
  //   .then( bicycles => {
  //     this.searchBicycles = bicycles;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

  }


