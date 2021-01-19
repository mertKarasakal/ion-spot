import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPagePage,
    children:[
      {
        path: '',
        redirectTo: '/app/pages/products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        children:[
          {
            path: '',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
          },
          {
            path: ':productId',
            loadChildren: () => import('../products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
          }
        ]
        
      },
      {
        path: 'add',
        loadChildren: () => import('../products/product-add/product-add.module').then( m => m.ProductAddPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'search',
        loadChildren: () => import('../products/product-search/product-search.module').then( m => m.ProductSearchPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../products/product-favorites/product-favorites.module').then( m => m.ProductFavoritesPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/user.module').then( m => m.UserPageModule),
            canLoad: [AuthGuard]
          }
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
