import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  cancell=false;
  cancelll=true;
  product:Product;
  //all forms name
  allboards_and_signage=true;
  printing_and_stationeries=true;
  constructor(private orderservice:OrderService, private productservice:ProductService, private formbuilder:FormBuilder, private router:Router) {

    this.orderadd=this.formbuilder.group({
      category_name:["",Validators.required],
      product_name:["",Validators.required],
      order_code:["",Validators.required],
      customer_code:["",Validators.required],
      thickness:["",Validators.required],
      width:["",Validators.required],
      height:["",Validators.required],
      print_and_cutting:["",Validators.required],
      fixing_area:["",Validators.required],
      fixing_type:["",Validators.required],
      board_side:["",Validators.required],
      chain_detail:["",Validators.required],
      chain_type:["",Validators.required],
      order_status:["",Validators.required]
    });
   }

  ngOnInit() {
   
  }
  get f() { return this.orderadd.controls; }
  
  ngOnChanges(){
    this.productservice.loadproduct(this.f.category_name.value)
    .subscribe(product=>this.product=product['records'])
  }
  //load forms to take the new orders
  loadform(){
    if(this.f.product_name.value=="foam board"){
      
    }else{
      alert("No");
      
    }
    
  }

  cancel(){
    this.cancell=true;
    this.cancelll=false;
  }
  no(){
    this.cancell=false;
    this.cancelll=true;
     }
  addorder(){
    this.orderservice.orderadd(this.orderadd.value)
    .subscribe(order=>{
      if(order.message){
        
      alert(order.message);
    }else{
      alert("error");
    }
  });
}
}
