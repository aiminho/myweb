import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodlist: Observable<Food[]>;

  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    this.foodlist = this.angularFirestore
      .collection<Food>('foods')
      .valueChanges();
  }

  ngOnInit() {}

  onGotoFoodClick() {
    this.router.navigate(['admin', 'food']);
  }

  onEditFoodClick(food: Food) {
    this.router.navigate(['admin', 'food']);
  }
}
