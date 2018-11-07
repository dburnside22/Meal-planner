import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalendarViewComponent } from './main-calendar-view.component';

describe('MainCalendarViewComponent', () => {
  let component: MainCalendarViewComponent;
  let fixture: ComponentFixture<MainCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
