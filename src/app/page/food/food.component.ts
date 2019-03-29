import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit() {}

  onFoodFormSubmit(foodForm: NgForm) {
    const model: Food = {
      name: foodForm.value.name,
      cal: foodForm.value.cal,
      url: null
      // url: this.downloadUrl
    };
    this.angularFirestore
      .collection('foods')
      .doc(foodForm.value.name)
      .set(model);
  }

  onUploadChange(event) {
    const file: File = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.angularFireStorage.ref(filePath);
    const task = this.angularFireStorage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => (this.downloadUrl = url));
        })
      )
      .subscribe();
  }
}
