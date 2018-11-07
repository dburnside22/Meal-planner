import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDayComponentComponent } from './calendar-day-component.component';

describe('CalendarDayComponentComponent', () => {
  let component: CalendarDayComponentComponent;
  let fixture: ComponentFixture<CalendarDayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
