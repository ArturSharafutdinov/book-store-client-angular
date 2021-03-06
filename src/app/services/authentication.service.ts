import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user';
import {apiUrl} from '../../environments/environment';
import {JwtResponse} from '../helpers/JwtResponse';
import {UserSignup} from '../models/user-signup';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): JwtResponse {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<JwtResponse>(`${apiUrl}/auth/signin`, { email, password })
      .pipe(map(answer => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(answer));
        this.currentUserSubject.next(answer);
        return answer;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  signUp(user){
    console.log(user);
    return this.http.post(`${apiUrl}/auth/signup`, user);

  }
}
