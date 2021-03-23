import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../../services/messenger.service';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product';
import {CartItem} from '../../models/cart-item';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  orders: Order[] = [];
  books


  constructor(private orderService: OrderService) { }


  ngOnInit(): void{
     this.orderService.getOrders().subscribe((orders) => {
       console.log(orders);
      this.orders = orders;
    });
  }





}
