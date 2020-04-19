import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAdviceComponent } from './list-of-advice.component';

describe('ListOfAdviceComponent', () => {
  let component: ListOfAdviceComponent;
  let fixture: ComponentFixture<ListOfAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
