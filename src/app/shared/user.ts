import {Address} from"./address";
export {Address} from"./address";

export class User {
    constructor (
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public firstname: string,
        public lastname: string,
        public admin: boolean,
        public address: Address[]
    )  {}
}
