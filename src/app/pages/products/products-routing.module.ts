import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'product-add',
    loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-search',
    loadChildren: () => import('./product-search/product-search.module').then( m => m.ProductSearchPageModule)
  },
  {
    path: 'product-favorites',
    loadChildren: () => import('./product-favorites/product-favorites.module').then( m => m.ProductFavoritesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
