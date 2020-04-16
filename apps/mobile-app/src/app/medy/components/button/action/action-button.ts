import { Component, ViewChild } from '@angular/core';
import { IonFab } from '@ionic/angular';

@Component({
  selector: 'medy-action-button',
  templateUrl: 'action-button.html',
  styleUrls: ['action-button.scss']
})
export class MedyActionButtonComponent {
  constructor() {}

  @ViewChild('fab', { static: true }) fab: IonFab;

  closeActionsList(): void {
    this.fab.close().catch();
  }
}
