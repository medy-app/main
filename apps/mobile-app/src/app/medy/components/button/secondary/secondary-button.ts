import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'medy-secondary-button',
  templateUrl: 'secondary-button.html',
  styleUrls: ['secondary-button.scss']
})
export class MedySecondaryButtonComponent {
  @Input()
  arrow: boolean = false;
  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}

