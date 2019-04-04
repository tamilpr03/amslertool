import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderedit',
  templateUrl: './orderedit.component.html',
  styleUrls: ['./orderedit.component.css']
})
export class OrdereditComponent implements OnInit {

  update_product_form: FormGroup;
  orders:Order;
  //emp_code="emp001";
  

  constructor(private orderservice:OrderService, private formbuilder:FormBuilder, private router:Router) { 
    
    this.update_product_form=this.formbuilder.group({
      product_name:["",Validators.required],
      order_code:["",Validators.required]
    });
  }
  
  cancel(){
    this.router.navigate(['/orderview']);
  }
  ngOnInit(){
    let order_code = window.localStorage.getItem("editemp_code");
    // read one product record
    this.orderservice.orderview(order_code)
        .subscribe(orders => {

            // put values in the form
            this.update_product_form.patchValue({
                product_name: orders.product_name,
                order_code:orders.order_code
            });
        });
}
updateProduct(){
        this.orderservice.orderupdate(this.update_product_form.value)
        .subscribe(orders=>{
          if(orders.status){
          alert("Updated")
          this.router.navigate(['/orderview'])
        }else{
          alert('failed')
        }
        });
}

}
