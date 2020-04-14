import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedyActionButtonComponent } from './components/action-button/action-button';
import { MedyShowMoreButtonComponent } from './components/show-more-button/show-more-button';
import { MedyReadOnButtonComponent } from './components/read-on-button/read-on-button';
import { MedyMoreNewsButtonComponent } from './components/more-news-button/more-news-button';

import { MedyPreventionStatsComponent } from './components/prevention-stats/prevention-stats';
import { MedyPreventionPointsCounterComponent } from './components/prevention-points-counter/prevention-points-counter';
import { MedyTipCardComponent } from './components/tip-card/tip-card';
import { MedyNewsCardComponent } from './components/news-card/news-card';
import { MedyPatientsStatsComponent } from './components/patients-stats/patients-stats';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [
    MedyActionButtonComponent,
    MedyPreventionStatsComponent,
    MedyPreventionPointsCounterComponent,
    MedyShowMoreButtonComponent,
    MedyTipCardComponent,
    MedyPatientsStatsComponent,
    MedyNewsCardComponent,
    MedyReadOnButtonComponent,
    MedyMoreNewsButtonComponent,
  ],
  exports: [
    MedyActionButtonComponent,
    MedyPreventionStatsComponent,
    MedyPreventionPointsCounterComponent,
    MedyShowMoreButtonComponent,
    MedyTipCardComponent,
    MedyPatientsStatsComponent,
    MedyNewsCardComponent,
    MedyReadOnButtonComponent,
    MedyMoreNewsButtonComponent,
  ],
})
export class MedyModule {}
