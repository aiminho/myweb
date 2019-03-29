import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { first, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = environment.appname;
  user: firebase.User;
  canActivate: boolean;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.user = this.angularFireAuth.auth.currentUser;
    this.angularFireAuth.authState.pipe(
      first(),
      map(resp => !!resp),
      tap(resp => {
        this.canActivate = resp ? true : false;
      })
    );
  }

  ngOnInit() {}

  onGotoPage(page: string) {
    this.router.navigate([page]);
  }

  onSignOutClick() {
    if (confirm('sign out?')) {
      this.angularFireAuth.auth.signOut().then(() => {
        this.router.navigate(['login']);
      });
    }
  }
}
