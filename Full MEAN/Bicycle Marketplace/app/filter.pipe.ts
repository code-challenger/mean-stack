import { Pipe, PipeTransform } from '@angular/core';
import { Bicycle } from './bicycle';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Bicycle>, searchString: string): Array<Bicycle> {
    if(!value){
      return value;
    }
    return value.filter(bike => {
      return bike.title.toLowerCase().includes(searchString.toLowerCase()) || bike.description.toLowerCase().includes(searchString.toLowerCase())
    })
  }

}
