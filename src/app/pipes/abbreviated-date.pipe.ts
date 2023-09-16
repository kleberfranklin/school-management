import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviatedDate'
})
export class AbbreviatedDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
