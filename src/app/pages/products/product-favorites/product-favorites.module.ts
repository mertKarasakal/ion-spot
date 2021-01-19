import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProductFavoritesPageRoutingModule } from './product-favorites-routing.module';

import { ProductFavoritesPage } from './product-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductFavoritesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ProductFavoritesPage]
})
export class ProductFavoritesPageModule {}
