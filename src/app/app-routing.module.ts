import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TodoComponent } from './page/todo/todo.component';
import { LoginComponent } from './page/login/login.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginWithPhoneComponent } from './page/login-with-phone/login-with-phone.component';
import { RegisterComponent } from './page/register/register.component';
import { CaloriesComponent } from './page/calories/calories.component';
import { FoodComponent } from './page/food/food.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { WeightComponent } from './page/weight/weight.component';

const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'intro',
        loadChildren: './modules/intro/intro.module#IntroModule'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login-with-phone',
        component: LoginWithPhoneComponent
      }
    ]
  },
  {
    path: 'admin',
    component: PrivateZoneComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CaloriesComponent
      },
      {
        path: 'todos',
        component: TodoComponent
      },
      {
        path: 'calories',
        component: CaloriesComponent
      },
      {
        path: 'food',
        component: FoodComponent
      },
      {
        path: 'food-list',
        component: FoodListComponent
      },
      {
        path: 'sleep',
        component: SleepComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'weight',
        component: WeightComponent
      }
    ]
  },
  {
    path: '*',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
