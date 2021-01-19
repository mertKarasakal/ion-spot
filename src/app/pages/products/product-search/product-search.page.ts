import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss'],
})
export class ProductSearchPage implements OnInit {
  filterTerm: string;
  loadedProducts: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loadedProducts = this.productsService.products;
  }

}
