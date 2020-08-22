import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  user: User;

  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit() {
    this._userService.getSession()
    .then( data => this.user = data)
    .catch( err => this._router.navigate(['']))
  }

  logout(){
    this._userService.logout()
    .then( data => this._router.navigate(['']))
    .catch()
  }

}
