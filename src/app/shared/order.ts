import {User} from './user';
import {Status} from './status';
import {Book} from "./book";


export class Order {
    constructor (
        public id: number,
        public user_id: number,
        public number: string,
        public total_net: number,
        public total_gross: number,
        public user: User[],
        public books: Book[],
        public status?: Status[],
    ) {}
}
