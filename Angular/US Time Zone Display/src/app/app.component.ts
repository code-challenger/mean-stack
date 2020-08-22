import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
 
  currentTime: any = Date.now();
  clickedOn: boolean = false;

  zones: Array<any> = [
    {zone:'PST', clickedOn: false},
    {zone:'MST', clickedOn: false},
    {zone:'EST', clickedOn: false}
  ];

  onSubmit(zone){
    
    if(zone == 'PST'){
      this.clickedOn = true;
      this.currentTime = Date.now() - (3 * 3600000);
    }
    if(zone == 'MST'){
      this.clickedOn = true;
      this.currentTime = Date.now() - (2 * 3600000);
    }
    if(zone == 'EST'){
      this.clickedOn = true;
      this.currentTime = Date.now();
    }
  }

  //reset everything
  clear(){
    for(let i = 0; i < this.zones.length; i++){
      this.zones[i]['clickedOn'] = false;
    }
    this.clickedOn = false;
    this.currentTime = Date.now();
  }
}

