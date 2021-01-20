import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-favorites',
  templateUrl: './product-favorites.page.html',
  styleUrls: ['./product-favorites.page.scss'],
})
export class ProductFavoritesPage implements OnInit, OnDestroy {
  filterTerm: string;
  loadedProducts: Product[];
  private productsSub: Subscription;

  constructor(private productsService: ProductsService, private router: Router) { }


  ngOnInit() {
    this.productsSub = this.productsService.products.subscribe(products => {
      this.loadedProducts = products;
    });
  }

  ngOnDestroy(){
    if(this.productsSub){
      this.productsSub.unsubscribe();
    }
  }

    onDelete(id: number, slidingItem: IonItemSliding){
      slidingItem.close();
      this.router.navigate(['/', 'app', 'pages', 'products', 'delete', id]);
      console.log('deleted item',id);
    }
}
