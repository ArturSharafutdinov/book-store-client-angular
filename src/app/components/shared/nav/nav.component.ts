import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isUser = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.isUser = this.userService.checkLogin();
  }



}
