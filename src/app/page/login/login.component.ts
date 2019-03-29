import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {}

  onLoginSubmit(f: NgForm) {
    if (f.valid) {
      this.angularFireAuth.auth
        .signInWithEmailAndPassword(f.value.userEmail, f.value.userPassword)
        .then(resp => {
          if (resp.user.emailVerified) {
            this.router.navigate(['admin']);
          } else {
            alert('Please verified your email');
          }
        })
        .catch(reason => alert(`Error: ${reason}`));
    } else {
      alert('Please fill email and password');
    }
  }

  onThirdPartySingInClick(provider: string) {
    if (provider === 'google') {
      this.angularFireAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } else if (provider === 'facebook') {
      this.angularFireAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      );
    } else if (provider === 'twitter') {
      this.angularFireAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      );
    } else if (provider === 'github') {
      this.angularFireAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      );
    }
  }
}
