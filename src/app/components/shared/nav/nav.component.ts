import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isUser = localStorage.getItem('currentUser') === null ? true : false;

  constructor(private userService: UserService, private authService: AuthenticationService,    private route: ActivatedRoute,
              private router: Router) {
    this.isUser = this.authService.currentUser === null ? true : false;
  }

  ngOnInit(): void {
   this.isUser = this.userService.checkLogin();
  }


  logout(){
    this.authService.logout();
    this.isUser = false;
    this.router.navigate(['/login']);
  }




}
