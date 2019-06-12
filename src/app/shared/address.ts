export class Address {
    constructor(
        public id: number,
        public streetname: string,
        public streetnumber: number,
        public zip: number,
        public city: string,
        public country: string
    ) {}
}
