// Product class to define this object's properties.
export class Customer {
    constructor(
        public id: number,
        public status:string,
        public message:string,
        public cus_name:string,
        public customer_code:string,
        public order_code:string,
        public cus_phone:number,
        public cus_altphone:number,
        public cus_email:string,
        public cus_company:string,
        public cus_addline1:string,
        public cus_addline2:string,
        public cus_area:string,
        public cus_district:string,
        public cus_state:string,
        public cus_country:string,
        public cus_pincode:number,
        public updated_at:string

    ){}
}