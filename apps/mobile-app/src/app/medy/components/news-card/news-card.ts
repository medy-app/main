import { Component, Input } from '@angular/core';

@Component({
  selector: 'medy-news-card',
  templateUrl: 'news-card.html',
  styleUrls: ['news-card.scss'],
})
export class MedyNewsCardComponent {
  @Input()
  title: string = '';
  @Input()
  provider: string = '';
  @Input()
  time: string = '';
  @Input()
  type: string = '';
  @Input()
  teaser: string = '';
  @Input()
  photo?: string;

  constructor() {}
}
