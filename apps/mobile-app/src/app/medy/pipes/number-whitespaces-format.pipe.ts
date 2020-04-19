import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberWhitespaceFormat' })
export class NumberWhitespacesFormat implements PipeTransform {
  transform = (price: string): string => String(price).replace(/(?!^)(?=(?:\d{3})+$)/g, ' ');
}
