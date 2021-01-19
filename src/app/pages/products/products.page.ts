import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  loadedProducts : Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loadedProducts = this.productsService.products;
  }
}
