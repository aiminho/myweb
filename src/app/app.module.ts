import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimCreditCardPipe } from './pipe/trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './page/todo/todo.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './page/register/register.component';
import { LoginWithPhoneComponent } from './page/login-with-phone/login-with-phone.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CaloriesComponent } from './page/calories/calories.component';
import { FoodComponent } from './page/food/food.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { WeightComponent } from './page/weight/weight.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrimCreditCardPipe,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PrivateZoneComponent,
    PublicZoneComponent,
    RegisterComponent,
    LoginWithPhoneComponent,
    CaloriesComponent,
    FoodComponent,
    FoodListComponent,
    ProfileComponent,
    SleepComponent,
    WeightComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
