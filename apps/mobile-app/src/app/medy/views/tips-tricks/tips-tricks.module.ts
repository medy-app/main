import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipsTricksPage } from './tips-tricks.page';
import { MedyModule } from '../../medy.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TipsTricksPage }]),
    MedyModule,
  ],
  declarations: [TipsTricksPage],
})
export class TipsTricksPageModule {}

