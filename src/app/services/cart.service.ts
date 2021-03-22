import { Injectable } from '@angular/core';
import {CartItem} from '../models/cart-item';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  getCartItems(): CartItem[]{
   return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addProductToCart(product: Product) {
    const oldCart = this.getCartItems();
    localStorage.removeItem('cart');
    if (oldCart.length === 0) {
      oldCart.push(new CartItem(product, 1));
    } else {
      let productExists = false;

      for (const i in oldCart) {
        if (oldCart[i].bookId === product.bookId) {
          oldCart[i].qty++;
          productExists = true;
          break;
        }
      }

      if (!productExists) {
        oldCart.push({
          bookId: product.bookId,
          name: product.name,
          price: product.price,
          qty: 1
        });
      }

    }
    localStorage.setItem('cart', JSON.stringify(oldCart));
  }

  calcCartTotal(){
    const cartItems = this.getCartItems();
    let cartTotal = 0;
    cartItems.forEach(item => {
     cartTotal += item.qty * item.price;
    });
    return cartTotal;
  }

  removeItem(product: CartItem){
    const oldCart = this.getCartItems();
    localStorage.removeItem('cart');

    for (const i  in oldCart) {
        if (oldCart[i].bookId === product.bookId) {
          const newData = oldCart.filter(data=>data.bookId!==product.bookId);
          localStorage.setItem('cart', JSON.stringify(newData));
          break;
        }
      }

  }


}
