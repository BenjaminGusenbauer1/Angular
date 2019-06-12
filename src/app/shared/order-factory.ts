import { Order } from './order';

export class OrderFactory {

    static empty() : Order {
        return new Order(null, 0, '', 0, 0, [], [], [{status: '', order_id: 0}])
    }

    static fromObject(rawOrder : any) : Order {
        return new Order(
            rawOrder.id,
            rawOrder.user_id,
            rawOrder.number,
            rawOrder.total_net,
            rawOrder.total_gross,
            rawOrder.user,
            rawOrder.books,
            rawOrder.status
        );
    }
}
