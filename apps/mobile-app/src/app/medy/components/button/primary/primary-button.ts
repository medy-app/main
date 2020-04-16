import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'medy-primary-button',
  templateUrl: 'primary-button.html',
  styleUrls: ['primary-button.scss']
})
export class MedyPrimaryButtonComponent {
  @Input()
  arrow: boolean = false;
  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
