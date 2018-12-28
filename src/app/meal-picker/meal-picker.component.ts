import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MealsService } from '../meals.service';
import { MealItem } from '../meal-item.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-meal-picker',
  templateUrl: './meal-picker.component.html',
  styleUrls: ['./meal-picker.component.scss']
})
export class MealPickerComponent implements OnInit {
  @Output() sendItems: EventEmitter<string[]> = new EventEmitter<string[]>();
  catagories = ['meats', 'veggies', 'dishes'];
  meats: string[] = [];
  veggies: string[] = [];
  dishes: string[] = [];
  menu: string[] = [];
  header = 'Select an Item(s)';

  catagoryPicked = '';
  newMealItem = {
    name: '',
    breakfast_food: false,
    lunch_food: false,
    dinner_food: false,
  };


  modalRef: BsModalRef;

  enterNewMealItem = false;

  @ViewChild('pickMeal') private template1: TemplateRef<any>;
  constructor(private mealsService: MealsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.menu = [];
    this.catagories.forEach((catagory) => {
      this.mealsService.getMealsByCatagory(catagory).subscribe((mealItems: MealItem[]) => {
        mealItems.forEach((mealItem: MealItem) => {
          this[catagory].push(mealItem.name);
        });
      });
    });
  }

  openMealPickerModal() {
    this.modalRef = this.modalService.show(this.template1);
  }

  toggleMealItemInMenu(item: string) {
    const indexOfItem = this.menu.indexOf(item);
    if (indexOfItem < 0) {
      this.menu.push(item);
    } else {
      this.menu.splice(indexOfItem, 1);
    }
  }

  showAddMealInput() {
    this.enterNewMealItem = true;
    this.header = 'Add Meal Item';
  }

  cancelAddNewMealItem() {
    this.enterNewMealItem = false;
  }

  addNewMealItem() {
    this.mealsService.addMealItem(this.newMealItem, this.catagoryPicked).subscribe();
  }

  closeModal() {
    console.log(this.menu);
    this.sendItems.emit(this.menu);
    console.log('close was called');
    this.enterNewMealItem = false;
    this.modalRef.hide();
  }

  isItemSelected(item) {
    const indexOfItem = this.menu.indexOf(item);
    if (indexOfItem > -1) {
      return 'light-green';
    }
  }
}
