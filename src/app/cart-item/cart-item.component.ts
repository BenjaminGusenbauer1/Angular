import { Component, OnInit, Input } from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'a.bs-cart-item',
  templateUrl: './cart-item.component.html',
  styles: []
})
export class CartItemComponent implements OnInit {

  @Input() book : Book;
  books=[];
  constructor() { }

  ngOnInit() {
  }

}
