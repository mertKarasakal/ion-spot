import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit, OnDestroy {
  product: Product;
  private productSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // let id: number = +this.route.snapshot.paramMap.get('productId');
    this.route.paramMap.subscribe(paramMap => {
    if(!paramMap.has('productId')){
      this.navCtrl.navigateBack('../product-list');
      return;
    }
    this.productSub = this.productsService.getProduct(+paramMap.get('productId'))
    .subscribe( product => {
      this.product = product;
    });
  })
  }

  ngOnDestroy(){
    if(this.productSub){
      this.productSub.unsubscribe();
    }
  }

  onAddFavorites(){}
}
