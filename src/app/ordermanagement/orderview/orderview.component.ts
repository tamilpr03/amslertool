import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
  orders:Order;
  deletee=false;
  vieww=true;
  constructor(private orderservice:OrderService, private router:Router) { }

  ngOnInit() {
    let emp_code = window.localStorage.getItem("editemp_code");
    if(!emp_code) {
      alert("Invalid action.")
      this.router.navigate(['employeelist']);
      return;
    }
    this.orderservice.orderview(emp_code)
        .subscribe(orders => this.orders=orders);
  }
  delete(){
    this.deletee=true;
    this.vieww=false;
  }
  view(){
    this.vieww=true;
    this.deletee=false;
  }
  deleted(){
    let order_code = window.localStorage.getItem("editemp_code");
    this.orderservice.orderdelete(order_code)
    .subscribe(orders=>{
      if(orders.status){
        alert("success");
        this.router.navigate(['/orderlist']);
      }else{
        alert('failed')
      }
    })
  }

}
