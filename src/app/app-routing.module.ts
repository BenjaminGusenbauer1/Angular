import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import {BookFormComponent} from "./book-form/book-form.component";
import {Book} from "./shared/book";
import {LoginComponent} from "./admin/login/login.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {CartComponent} from "./cart/cart.component";
import {AdministrationComponent} from "./administration/administration.component";
import {AdministrationDetailsComponent} from "./administration-details/administration-details.component";

const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    //{ path: 'home', component: HomeComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/:isbn', component: BookDetailsComponent },
    { path: 'administration', component: AdministrationComponent },
    { path: 'administration/:order_id', component: AdministrationDetailsComponent },
    { path: 'add/:isbn', component: BookFormComponent},
    { path: 'add', component: BookFormComponent },
    { path: 'orders', component: OrderListComponent},
    { path: 'orders/:id', component: OrderDetailsComponent},
    { path: 'cart', component: CartComponent},
    { path: 'login', component: LoginComponent},
    { path: 'admin/:isbn', component: BookFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }