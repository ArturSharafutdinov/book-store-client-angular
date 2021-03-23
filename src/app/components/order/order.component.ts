import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(private orderService: OrderService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      delivery_type: ['', Validators.required],
      bonus: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.orderForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    this.orderService.sendOrder(this.orderForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/shop']);
        },
        error => {
          this.error = error;
          console.log(error);
          this.loading = false;
        });
    return true;
  }
}
