import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): string {
    if (typeof value === 'number') {
      value = value.toString();
    }

    if (value.length <= 3) {
      return value;
    }

    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
  }

}
