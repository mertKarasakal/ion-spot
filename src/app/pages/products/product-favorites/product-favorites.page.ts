import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-favorites',
  templateUrl: './product-favorites.page.html',
  styleUrls: ['./product-favorites.page.scss'],
})
export class ProductFavoritesPage implements OnInit {
  filterTerm: string;
  loadedProducts: Product[];

  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.loadedProducts = this.productsService.products;
  }

    onDeleteFavorite(){

    }
}
