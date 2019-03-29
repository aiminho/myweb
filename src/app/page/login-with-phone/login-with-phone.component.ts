import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-with-phone',
  templateUrl: './login-with-phone.component.html',
  styleUrls: ['./login-with-phone.component.css']
})
export class LoginWithPhoneComponent implements OnInit {
  confirmationResult: firebase.auth.ConfirmationResult;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {}

  onGetOTP(mobileForm: NgForm) {
    this.angularFireAuth.auth
      .signInWithPhoneNumber(
        '+66' + mobileForm.value.phoneNumber,
        new firebase.auth.RecaptchaVerifier('recapt-id')
      )
      .then(confirmationResult => {
        this.confirmationResult = confirmationResult;
      })
      .catch(reason => alert(`Error: ${reason}`));
  }

  onConfirmOTP(otpForm: NgForm) {
    this.confirmationResult
      .confirm(otpForm.value.otp)
      .then(resp => {
        this.router.navigate(['admin']);
      })
      .catch(reason => alert(`Error: ${reason}`));
  }
}
