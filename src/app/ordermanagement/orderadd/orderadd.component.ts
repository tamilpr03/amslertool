import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';

import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-orderadd',
  templateUrl: './orderadd.component.html',
  styleUrls: ['./orderadd.component.css']
})
export class OrderaddComponent implements OnChanges {
  orderadd:FormGroup;
  customeradd:FormGroup;
//array's
  product:Product;
  orders:Order;
  //all forms name
  allboards_and_signage=true;
  printing_and_stationeries=true;
  promotional_items=true;
  safety_products=true;
  iot=true;
  //order customertab
  order_form=true;
  customer_form=false;
  //others
  ordercode;
  customercode;
  cus_code;
  date=new Date;
  
  
  



  constructor(private orderservice:OrderService, private productservice:ProductService, private formbuilder:FormBuilder, private router:Router) {

    //order form attributes
    this.orderadd=this.formbuilder.group({
      category_name:["",Validators.required],
      product_name:["",Validators.required],
      order_code:["",Validators.required],
      customer_code:["",Validators.required],
      thickness:["",Validators.required],
      size:["",Validators.required],
      width:["",Validators.required],
      height:["",Validators.required],
      print_and_cutting:["",Validators.required],
      fixing_area:["",Validators.required],
      fixing_type:["",Validators.required],
      board_side:["",Validators.required],
      chain_detail:["",Validators.required],
      chain_type:["",Validators.required],
      cus_expected_delivery:["",Validators.required],
      order_status:["processing",Validators.required],
      order_placed_from:["",Validators.required],
      order_placed_at:["",Validators.required]
    });
    
    //customer form attributes
    this.customeradd=this.formbuilder.group({
      customer_code:["",Validators.required],
      order_code:["",Validators.required],
      cus_name:["",Validators.required],
      cus_phone:["",Validators.required],
      cus_altphone:["",Validators.required],
      cus_email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      cus_company:["",Validators.required],
      cus_addline1:["",Validators.required],
      cus_addline2:["",Validators.required],
      cus_area:["",Validators.required],
      cus_district:["",Validators.required],
      cus_state:["",Validators.required],
      cus_country:["",Validators.required],
      cus_pincode:["",Validators.required],
      created_at:["",Validators.required],
      
    });

   }
   get f() {
    return this.orderadd.controls;
    }
    get g() { return this.customeradd.controls; }
    
  ngOnInit() {
    //fom batch values
    this.orderadd.patchValue({
      order_placed_at:this.date,
      order_placed_from:"tamil"
    });
    this.customeradd.patchValue({
      created_at:this.date,
      cus_country:"India",
      cus_state:"Tamilnadu"
    });
    
    //store customer code temproryly
    var cus_code=window.localStorage.getItem("cus_code");
    this.cus_code=cus_code;
    //order code gen
   var ordercode=Math.floor((Math.random() * 100000) + 999999);
   this.ordercode=ordercode;
   if(ordercode){
    window.localStorage.setItem("ord_code","order_"+this.ordercode);
    this.orderadd.patchValue({
      order_code:"order_"+ordercode
    });
    this.customeradd.patchValue({
      order_code:"order_"+ordercode
    });
   }
   //customer code gen
   var customercode=Math.floor((Math.random() * 10000) + 99999);
   this.customercode=customercode;
   if(customercode){
    window.localStorage.setItem("cus_code","customer_"+this.customercode);
    this.orderadd.patchValue({
      customer_code:"customer_"+customercode
    });
    this.customeradd.patchValue({
      customer_code:"customer_"+customercode
    });
   }
  }
  
  ngOnChanges(){
    this.productservice.loadproduct(this.f.category_name.value)
    .subscribe(product=>this.product=product['records'])
  }
  //load formss to take the new orders
  loadform(){
    if(this.f.product_name.value=="Foam Board" || "Acrylics"){
    }else{
      alert("No");
    }
  }
//click to add orders
  addorder(){
    this.orderservice.orderadd(this.orderadd.value)
    .subscribe(orders=>{
        if(orders.status){
          this.customer_form=true;
          this.order_form=false;
          window.alert("Order successfully placed, please press 'OK' and fill the customer details to complete the order");
        }else{
          window.alert("something went wrong, please try again...");
          this.order_form=true;
        }
    });
  }
  //clzick to add customers
  addcustomer(){
    this.sendmail_tocustomer();
    this.orderservice.customeradd(this.customeradd.value)
    .subscribe(orders=>{
        if(orders.status){
          window.localStorage.removeItem("cus_code");
          window.localStorage.removeItem("ord_code");
          this.router.navigate(['dashboard/orderlist']);

          window.alert("customer details successfully added, and Order Completed Successfully");
        }else{
          window.alert("something went wrong, please try again...")
        }
    });
  }
  //customer conformationemail
  sendmail_tocustomer() {
    this.orderservice.sendmail_tocustomer(this.g.cus_email.value,this.g.cus_name.value, this.g.customer_code.value,this.g.order_code.value)
    .subscribe()
   // .subscribe(
   // data => {
   //     window.alert(data.message)
  //  })
}
 
}
