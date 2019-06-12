import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";
import {AuthService} from "../shared/authentication-service";
import {Order} from "../shared/order"
import {OrderFactory} from "../shared/order-factory";
import {Status} from "../shared/status";

@Component({
  selector: 'bs-order-details',
  templateUrl: './order-details.component.html',
  styles: []
})
export class OrderDetailsComponent implements OnInit {

    @Input() order : Order;
    @Input() status : Status;
    constructor(
        private bs : BookStoreService,
        private route : ActivatedRoute,
        private router: Router,
        public authService: AuthService
    ) { }

  ngOnInit() {
      const params = this.route.snapshot.params;
      this.bs.getSingleOrder(params['id']).subscribe(
          dataFromObservable => {this.order = dataFromObservable}
      );
  }

}
