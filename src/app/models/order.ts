import {Book} from './book';

export class Order {
  delivery_type: string;
  bonus : boolean;
  customerName: string;
  userId: string;
 orders: Book[];


  constructor(delivery_type: string, bonus: false, customerName: string, userId: string, orders: Book[]) {
    this.delivery_type = delivery_type;
    this.bonus = bonus;
    this.customerName = customerName;
    this.userId = userId;
   this.orders = orders;
  }
}
