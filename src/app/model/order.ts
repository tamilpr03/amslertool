// Product class to define this object's properties.
export class Order{
    constructor(
        public id: number,
        public status:string,
        public message:string,
        public category_name: string,
        public product_name: string,
        public order_code: string,
        public order_status: string,
        public customer_code: string,
        public thickness: string,
        public width: string,
        public height: string,
        public print_and_cutting: string,
        public fixing_area: string,
        public fixing_type: string,
        public board_side: string,
        public chain_detail: string,
        public chain_type: string,
        public cus_expected_delivery

    ){}
}