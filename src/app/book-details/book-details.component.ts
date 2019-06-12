import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import {ActivatedRoute, Router} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";
import {AuthService} from "../shared/authentication-service";

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  @Input() book : Book;
  constructor(
      private bs : BookStoreService,
      private route : ActivatedRoute,
      private router: Router,
      public authService: AuthService
  ) { }

  ngOnInit() {
      const params = this.route.snapshot.params;
      this.bs.getSingle(params['isbn']).subscribe(
          dataFromObservable => this.book = dataFromObservable
      );
  }

  removeBook () {
    if (confirm("Buch wirklich löschen?")) {
      this.bs.remove(this.book.isbn)
          .subscribe(res => this.router.navigate(['../'],
              {relativeTo: this.route}
        ));
    }
  }

  addBookToCart () {
    let cart = [];
    if (localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(this.book);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigateByUrl('/cart');
  }

  getRating (num:number) {
    return new Array(num);
  }
}
