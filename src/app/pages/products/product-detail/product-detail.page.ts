import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
    if(!paramMap.has('productId')){
      this.navCtrl.navigateBack('../product-list');
      return;
    }
    this.product = this.productsService.getProduct(paramMap.get('productId'));
  })
  }

  onAddFavorites(){}
}
