import {Product} from './product';

export class CartItem {
  bookId: number;
  name: string;
  qty: number;
  price: number;

  constructor( product: Product, qty= 1) {
    this.bookId = product.bookId;
    this.name = product.name;
    this.qty = qty;
    this.price = product.price;
  }
}
