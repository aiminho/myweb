import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {}

  onGotoFoodListClick() {
    this.router.navigate(['admin', 'food-list']);
  }
}
