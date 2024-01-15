import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAppRoutingModule } from './shopApp-routing.module';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';




@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ShopAppRoutingModule
  ]
})
export class ShopAppModule { }
