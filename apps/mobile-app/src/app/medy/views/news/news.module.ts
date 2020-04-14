import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPageComponent } from './news.page';
import { MedyModule } from '../../medy.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NewsPageComponent }]),
    MedyModule,
  ],
  declarations: [NewsPageComponent],
})
export class NewsPageModule {}
