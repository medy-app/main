import { Component, Input } from '@angular/core';

@Component({
  selector: 'medy-prevention-points-counter',
  templateUrl: 'prevention-points-counter.html',
  styleUrls: ['prevention-points-counter.scss'],
})
export class MedyPreventionPointsCounterComponent {
  @Input()
  counter: number = 0;

  constructor() {}
}
