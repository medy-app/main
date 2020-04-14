import { Component, Input } from '@angular/core';

@Component({
  selector: 'medy-tip-card',
  templateUrl: 'tip-card.html',
  styleUrls: ['tip-card.scss'],
})
export class MedyTipCardComponent {
  @Input()
  label: string = '';
  @Input()
  number: number = 0;
  @Input()
  icon: string;

  constructor() {}
}
