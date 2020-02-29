// ng g pipe shared/pipes/sort.pipe.ts
//shared/pipes/sort.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false //by default is true
})
export class SortPipe implements PipeTransform {
//transform is called all times if pure is set to false
//tranform is called whenver object is changed
//stateful pipe
sortedItems:any[];
actualItems:any[];
  transform(items: any[], 
           fieldName: string, 
           order: string = 'asc'): any {
             console.log('sort pipe called');
    if (!items || !fieldName) {
      return items;
    }
    if (items !== this.actualItems) {
      this.actualItems = items;
    } //FIXME

    if (order === 'desc') {
      return items.sort ( (left, right) => {
            if (left[fieldName] < right[fieldName])
              return -1;

            return 1
      })
    }

    // asc
    return items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName])
        return 1;

      return -1
    })

  }

}