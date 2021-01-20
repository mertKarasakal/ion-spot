import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAddPageRoutingModule } from './product-add-routing.module';

import { ProductAddPage } from './product-add.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProductAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductAddPage]
})
export class ProductAddPageModule {}
