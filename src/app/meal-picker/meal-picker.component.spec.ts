import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPickerComponent } from './meal-picker.component';

describe('MealPickerComponent', () => {
  let component: MealPickerComponent;
  let fixture: ComponentFixture<MealPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
