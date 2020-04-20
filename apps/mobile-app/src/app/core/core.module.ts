import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { PreventionPointsService } from './services/prevention-points.service';

/* note: do NOT import this module anywhere other than AppModule! */
@NgModule({
  declarations: [],
  providers: [StorageService, PreventionPointsService],
  imports: [CommonModule],
  exports: []
})
export class CoreModule {}
