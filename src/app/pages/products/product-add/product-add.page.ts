import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  form: FormGroup;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      photoUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateProduct() {
    if (!this.form.valid) {
      return;
    }
    this.productsService.addProduct(
      this.form.value.title,
      this.form.value.description,
      +this.form.value.price,
      this.form.value.imageUrl);
      this.form.reset();
      this.router.navigate(['/app/pages/products']);
      console.log(this.form.value);
  }

}

