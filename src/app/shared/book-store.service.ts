import { Injectable } from '@angular/core';
import {Author, Book, Image} from "./book";
import {Order} from "./order";
import { Status } from "./status";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable, throwError} from "rxjs/index";
import {catchError, retry} from "rxjs/internal/operators";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()

export class BookStoreService {

    private api = 'http://bookstore19.s1510456010.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getAll() : Observable<Array<Book>>{
      return this.http.get(`${this.api}/books`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

  getSingle(isbn : string) : Observable<Book> {
      return this.http.get(`${this.api}/book/${isbn}`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

  create (book : Book) : Observable<any> {
    return this.http.post(`${this.api}/book`, book)
        .pipe(retry(3))
        .pipe(catchError(this.errorHandler));
  }

  update (book : Book) : Observable<any> {
      return this.http.put(`${this.api}/book/${book.isbn}`, book)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

  remove (isbn : string) : Observable<any> {
      return this.http.delete(`${this.api}/book/${isbn}`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

  getAllOrdersOfUser(user_id) : Observable<Array<Order>> {
      return this.http.get(`${this.api}/orders/${user_id}`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

    getSingleOrder(order_id : number) : Observable<Order> {
        return this.http.get(`${this.api}/order/${order_id}`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    submitOrder(order: Order) : Observable<any> {
        console.log(order);
        let x;
        x = new Date(JSON.parse(JSON.stringify(new Date())));
        order.number = x.getDay() + "." + x.getMonth() + "." + x.getFullYear() + "." + x.getHours() + "." + x.getMinutes() + "." + x.getSeconds() + '/' + order.user_id;
        console.log(order.number);
      return this.http.post(`${this.api}/order`, order)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
    }

    getAllOrders() : Observable<Array<Order>> {
        return this.http.get(`${this.api}/orders/`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    submitStatus(order: Order) : Observable<any>{
      console.log(order.status);
      return this.http.put(`${this.api}/admin`, order.status)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
    }

  private errorHandler ( error:Error | any) :Observable<any> {
      return throwError(error);
  }
}