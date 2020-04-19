import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPageComponent {
  constructor(
    private router: Router,

  ) {}


  public goPage(page: string) {

    this.router.navigate([ page]);
  }
}
