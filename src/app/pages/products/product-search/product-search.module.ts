import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProductSearchPageRoutingModule } from './product-search-routing.module';

import { ProductSearchPage } from './product-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ProductSearchPage]
})
export class ProductSearchPageModule {}
