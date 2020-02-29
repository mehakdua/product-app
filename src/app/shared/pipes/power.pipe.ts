import { Pipe, PipeTransform } from '@angular/core';
//2 |power:3 === 2^3
//left|power:parameter1:param2:pram3 if we dont give any param, ti becomes undefined
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent:number =1): number {
    return Math.pow(value,exponent);
  }

}
