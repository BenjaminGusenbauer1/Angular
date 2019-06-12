import { Component, OnInit } from '@angular/core';
import {BookStoreService} from "../shared/book-store.service";
import { Order } from "../shared/order";

@Component({
  selector: 'bs-administration',
  templateUrl: './administration.component.html',
  styles: []
})
export class AdministrationComponent implements OnInit {

  orders: Order[];

  constructor(private bs:BookStoreService) { }

  ngOnInit() {
    //this.bs.getAllOrders().subscribe(res => {this.orders = res});
      this.bs.getAllOrdersOfUser(1).subscribe(res => {this.orders = res});
  }
}
