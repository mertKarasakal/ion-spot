import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit,OnDestroy {
  loadedProducts : Product[];
  private productsSub: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsSub = this.productsService.products.subscribe( products =>{
      this.loadedProducts = products;
    });
  }

  ngOnDestroy(){
    if(this.productsSub){
      this.productsSub.unsubscribe();
    }
  }
}
