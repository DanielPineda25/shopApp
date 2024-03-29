import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { formGuard } from './guards/form.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
    { path: 'register', component: RegisterPageComponent },
    { path: 'detail', component: DetailPageComponent, canActivate: [
      formGuard
    ] },
    { path: '**', redirectTo: 'register' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAppRoutingModule { }
