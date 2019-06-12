import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import {BookStoreService} from "../shared/book-store.service";
import { Order } from "../shared/order";
import { Status } from "../shared/status";

@Component({
  selector: 'bs-administration-details',
  templateUrl: './administration-details.component.html',
  styles: []
})
export class AdministrationDetailsComponent implements OnInit {

  @Input() order : Order;
  @Input() status : Status;
  constructor(
      private bs: BookStoreService,
      private route : ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
      const params = this.route.snapshot.params;
      this.bs.getSingleOrder(params['order_id']).subscribe(
          dataFromObservable => this.order = dataFromObservable
      );
  }

  submitStatus() {
      const params = this.route.snapshot.params;
      this.status.order_id = params['order_id'];

      /*this.bs.submitStatus(this.status).subscribe(res => {
        this.router.navigate(['../'], {relativeTo: this.route});
      });*/
  }

}
