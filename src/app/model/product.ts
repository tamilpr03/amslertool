// Product class to define this object's properties.
export class Product {
    constructor(
        public id: number,
        public status:string,
        public product_code: string,
        public product_name: string,
        public category_name: string
    ){}
}