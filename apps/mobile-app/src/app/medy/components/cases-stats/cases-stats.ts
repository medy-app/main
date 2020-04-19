import { Component, Input } from '@angular/core';
import { StatsDto, CountryStatsDto } from '../../services/dto';

@Component({
  selector: 'medy-cases-stats',
  templateUrl: 'cases-stats.html',
  styleUrls: ['cases-stats.scss']
})
export class MedyCasesStatsComponent {
  @Input()
  global: StatsDto;
  @Input()
  country: CountryStatsDto;

  constructor() {}
}
