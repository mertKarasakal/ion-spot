import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss'],
})
export class ProductSearchPage implements OnInit, OnDestroy {
  filterTerm: string;
  loadedProducts: Product[];
  private productsSub: Subscription;

  constructor(private productsService: ProductsService) { }

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

}
