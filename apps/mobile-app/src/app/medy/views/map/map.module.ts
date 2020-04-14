import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapPageComponent } from './map.page';
import { MedyModule } from '../../medy.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MapPageComponent }]),
    MedyModule,
  ],
  declarations: [MapPageComponent],
})
export class MapPageModule {}
