import { Component, Input } from '@angular/core';

@Component({
  selector: 'medy-patients-stats',
  templateUrl: 'patients-stats.html',
  styleUrls: ['patients-stats.scss'],
})
export class MedyPatientsStatsComponent {
  @Input()
  infected: number = 0;
  @Input()
  recovered: number = 0;

  constructor() {}
}
