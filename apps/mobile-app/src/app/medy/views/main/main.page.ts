import { Component, OnInit } from '@angular/core';
import { CoronaStatsService } from '../../services/corona-stats.service';
import { Observable, Subscription } from 'rxjs';
import { StatsDto, CountryStatsDto } from '../../services/dto';

@Component({
  selector: 'medy-app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPageComponent {
  globalStats$: Observable<StatsDto>;
  countryStats$: Observable<CountryStatsDto>;

  constructor(private coronaStatsService: CoronaStatsService) {
    this.globalStats$ = this.coronaStatsService.getGlobal();
    this.countryStats$ = this.coronaStatsService.getCountry();
  }
}
