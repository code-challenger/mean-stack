import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Quote Ranks';

  quote: Quote = new Quote();
  quotes: Array<Quote> = [];
  @Input() private index: number;

  onSubmit(){
    console.log(this.quote);
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }

  onDestroy(index){
    this.quotes.splice(index,1);
    console.log(this.quotes);
  }

}
