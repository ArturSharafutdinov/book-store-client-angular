import {Product} from './product';

export class CartItem {
  id: number;
  bookId: number;
  name: string;
  qty: number;
  price: number;

  constructor(id: number, product: Product, qty= 1) {
    this.id = id;
    this.bookId = product.bookId;
    this.name = product.name;
    this.qty = qty;
    this.price = product.price;
  }
}
