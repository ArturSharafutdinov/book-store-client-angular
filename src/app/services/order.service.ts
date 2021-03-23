import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../models/order';
import {apiUrl} from '../../environments/environment';
import {JwtResponse} from '../helpers/JwtResponse';
import {catchError, map} from 'rxjs/operators';
import {Book} from '../models/book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  sendOrder(orderForm){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const books = [];
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (const i  in cart) {
      books.push(new Book(cart[i].qty, cart[i].bookId));
    }

    const order = new Order(orderForm.delivery_type, false, currentUser.user.username, currentUser.user.id, books);
    return this.http.post(`${apiUrl}/order`, order).pipe().pipe(map(answer => {
      localStorage.removeItem('cart');
      return answer;
    }));
  }

  getOrders(): Observable<Order[]>{
   return this.http.get<Order[]>(`${apiUrl}/order/byUserId?userId=${JSON.parse(localStorage.getItem('currentUser')).user.id}`);
  }
}
