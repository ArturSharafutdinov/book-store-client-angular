import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) { }


  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    this.cartTotal = this.cartService.calcCartTotal();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
      this.cartTotal = this.cartService.calcCartTotal();
    });
  }

  loadCartItems(){
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(){
    this.cartItems = [];
    localStorage.removeItem('cart');
  }

  removeItem(item: CartItem){
    this.cartService.removeItem(item);
    this.loadCartItems();
    this.cartTotal = this.cartService.calcCartTotal();
  }




}
