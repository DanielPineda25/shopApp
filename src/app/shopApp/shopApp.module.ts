import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopAppRoutingModule } from './shopApp-routing.module';

import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SearchRefEanComponent } from './components/search-ref-ean/search-ref-ean.component';
import { StoreSelectorComponent } from './components/store-selector/store-selector.component';
import { UserDocumentComponent } from './components/user-document/user-document.component';
import { ViewListComponent } from './components/view-list/view-list.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    LayoutPageComponent,
    RegisterPageComponent,
    SearchRefEanComponent,
    StoreSelectorComponent,
    UserDocumentComponent,
    ViewListComponent,
  ],
  imports: [
    CommonModule,
    ShopAppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShopAppModule { }
