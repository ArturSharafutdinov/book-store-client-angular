import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import {apiUrl} from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() { }

  checkLogin(): boolean {
    if (localStorage.getItem('currentUser') !== null){
      return true;
    }
    return false;
  }
}
