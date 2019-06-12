import { Component, OnInit } from '@angular/core';
import {BookFactory} from "../shared/book-factory";
import {OrderFactory} from "../shared/order-factory";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/authentication-service";
import {Book} from "../shared/book";
import {Order} from "../shared/order";

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  books: Book[];
  order: Order;

  constructor(
      private bs: BookStoreService,
      private route: ActivatedRoute,
      private router:Router,
      private authService: AuthService
  ) { }


  ngOnInit() {
    let localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) {
      localCart.forEach(book => {
        book.price = parseFloat(book.price);
      });
    }
    this.books = localCart;
  }

  submitCart() {
    const order: Order = OrderFactory.empty();

    let localCart = JSON.parse(localStorage.getItem('cart'));
    localCart.forEach(book => {
        book.price = parseFloat(book.price);
    });
    order.books = localCart;

    let price = 0;
    order.books.forEach(function (book) {
      price += book.price;
    });
    order.total_net = price;
    let VAT = 10;
    let VATBook = order.total_net/100*VAT;
    order.total_gross = price+=VATBook;
    order.user_id = this.authService.getCurrentUserId();

    this.bs.submitOrder(order).subscribe(() => {
      localStorage.removeItem('cart');
      this.router.navigateByUrl('/orders');
    });
  }

    getTotalNetValue() {
        let totalValue = 0;
        this.books.forEach(function (book) {
            totalValue += book.price;
        });
        return totalValue.toFixed(2);
    }
    getTotalGrossValue() {
        let totalValue = 0;
        this.books.forEach(function (book) {
            totalValue += book.price*1.1;
        });
        return totalValue.toFixed(2);
    }
}
