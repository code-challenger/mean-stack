import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  @Input() quote:Quote = new Quote();
  @Input() index: number;
  @Input() quotes: Array<Quote>;
  @Output() quoteEmit = new EventEmitter();
 

  constructor() { }

  ngOnInit() {
  }

  onUpVote(){
    this.quote.votes++;
  }


  onDownVote(){
    this.quote.votes--;
  }
  onDestroy(){
    this.quoteEmit.emit(this.index);
  }

}
