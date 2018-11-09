import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCalendarViewComponent } from './individual-calendar-view.component';

describe('IndividualCalendarViewComponent', () => {
  let component: IndividualCalendarViewComponent;
  let fixture: ComponentFixture<IndividualCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
