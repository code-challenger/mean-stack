import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Barcode Generator';

   bars: Array<string> = [];

   randomColors(){
     
     for(let i = 10; i > 0; i--){
        const rand = (Math.floor(Math.random()*10)) + 1;
        if(rand ===1 || rand ===2){
          this.bars.push('DarkSeaGreen');
        }
        if(rand ===2 || rand ===3){
          this.bars.push('DarkTurquoise');
        }
        if(rand ===4 || rand ===5){
          this.bars.push('LightGoldenRodYellow');
        }
        if(rand ===6 || rand ===7){
          this.bars.push('Salmon');
        }
        if(rand ===8 || rand ===9){
          this.bars.push('Teal');
        }
        if(rand == 10){
          this.bars.push('Black');
        }
     }
   }

   colors = this.randomColors();

   //invoked only once when the directive is instantiated
   ngOnIt(){
     this.randomColors();
   }
  }

