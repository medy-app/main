import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPageComponent } from './settings.page';
import { MedyModule } from '../../medy.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingsPageComponent }]),
    MedyModule,
  ],
  declarations: [SettingsPageComponent],
})
export class SettingsPageModule {}
