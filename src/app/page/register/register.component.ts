import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit(f: NgForm) {
    if (f.valid) {
      if (f.value.userPassword === f.value.confirmPassword) {
        this.angularFireAuth.auth
          .createUserWithEmailAndPassword(
            f.value.userEmail,
            f.value.userPassword
          )
          .then(resp => {
            resp.user
              .sendEmailVerification()
              .then(() => {
                this.router.navigate(['login']);
              })
              .catch(reason => alert(`Error: ${reason}`));
          })
          .catch(reason => alert(`Error: ${reason}`));
      } else {
        alert('Confirm password is not match');
      }
    } else {
      alert('Please fill email or password');
    }
  }
}
