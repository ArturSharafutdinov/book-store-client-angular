import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() order: any;

  constructor() { }

  ngOnInit(): void {
  }

}
