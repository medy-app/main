import { Component } from '@angular/core';
import { PreventionPointsService } from '../../../core/services/prevention-points.service';

@Component({
  selector: 'medy-prevention-stats',
  templateUrl: 'prevention-stats.html',
  styleUrls: ['prevention-stats.scss']
})
export class MedyPreventionStatsComponent {
  preventionPoints$ = this.preventionPointsService.preventionPoints$;
  constructor(private readonly preventionPointsService: PreventionPointsService) {}
}
