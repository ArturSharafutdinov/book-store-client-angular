import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
import {Order} from '../models/order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl+"/books");
  }

  sendProduct(product){
    console.log(product);
    return this.http.post(`${apiUrl}/books`, product).pipe(map(answer => {
      return answer;
    }));
  }
}
