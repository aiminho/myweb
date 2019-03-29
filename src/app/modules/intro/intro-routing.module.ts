import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page/page-one/page-one.component';
import { PageTwoComponent } from './page/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent
  },
  {
    path: 'pageone',
    component: PageOneComponent
  },
  {
    path: 'pagetwo',
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
