import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    const prefix = value.substr(0, 3);
    const subfix = value.substr(13, 15);
    let data = '';
    for (let i = 0; i < 10; i++) {
      data += args;
    }
    return prefix + data + subfix;
  }

}
