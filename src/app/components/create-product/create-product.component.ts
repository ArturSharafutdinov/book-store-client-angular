import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      pages: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      author: ['', Validators.required],
      publisherName: ['', Validators.required],
      categoryName: ['', Validators.required],
      kolvo: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    this.productService.sendProduct(this.productForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/shop']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    return true;
  }
}
