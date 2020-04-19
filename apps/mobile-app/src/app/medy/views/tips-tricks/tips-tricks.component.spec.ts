import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTricksComponent } from './tips-tricks.component';

describe('TipsTricksComponent', () => {
  let component: TipsTricksComponent;
  let fixture: ComponentFixture<TipsTricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
