import { Component, OnInit } from '@angular/core';
import {BookStoreService} from "../shared/book-store.service";
import {Order} from "../shared/order"
import {AuthService} from "../shared/authentication-service";

@Component({
  selector: 'bs-order-list',
  templateUrl: './order-list.component.html',
  styles: []
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(
      private bs:BookStoreService,
      private authenticationService:AuthService
  ) { }

  ngOnInit() {
    let user_id = this.authenticationService.getCurrentUserId();
    console.log(user_id);
    this.bs.getAllOrdersOfUser(user_id).subscribe(res => {this.orders = res});
  }

}
