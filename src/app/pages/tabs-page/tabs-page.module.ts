import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPagePageRoutingModule } from './tabs-page-routing.module';

import { TabsPagePage } from './tabs-page.page';
import { ProductsPageModule } from '../products/products.module';
import { ProductAddPageModule } from '../products/product-add/product-add.module';
import { ProductDetailPageModule } from '../products/product-detail/product-detail.module';
import { ProductFavoritesPageModule } from '../products/product-favorites/product-favorites.module';
import { ProductSearchPageModule } from '../products/product-search/product-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPagePageRoutingModule,
    ProductsPageModule,
    ProductAddPageModule,
    ProductDetailPageModule,
    ProductFavoritesPageModule,
    ProductSearchPageModule
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
