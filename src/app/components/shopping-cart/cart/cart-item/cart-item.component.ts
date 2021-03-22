import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CartItem} from '../../../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  @Output() removableItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: CartItem){
    this.removableItem.emit(item);
  }

}
