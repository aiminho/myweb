import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { PageOneComponent } from './page/page-one/page-one.component';
import { PageTwoComponent } from './page/page-two/page-two.component';

@NgModule({
  declarations: [PageOneComponent, PageTwoComponent],
  imports: [
    CommonModule,
    IntroRoutingModule
  ]
})
export class IntroModule { }
