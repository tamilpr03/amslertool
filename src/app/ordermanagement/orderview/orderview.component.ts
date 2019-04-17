import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
declare var $:any;

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
  orders:Order;
  customers:Customer;
  deletee=false;
  vieww=true;
  printpage=false;


  constructor(private orderservice:OrderService, private router:Router) { }

  ngOnInit() {
    
    let view = window.localStorage.getItem("view");
    if(!view) {
      alert("Invalid action.")
      this.router.navigate(['dashboard/orderlist']);
      return;
    }
    //view orders detailes
    this.orderservice.orderview(view)
        .subscribe(orders => this.orders=orders);
    //view orders detailes
    this.orderservice.customerview(view)
        .subscribe(customers => this.customers=customers);
  }
  delete(){
    this.deletee=true;
    this.vieww=false;
  }
  view(){
    this.vieww=true;
    this.deletee=false;
  }
  printDiv(divID) {
    //Get the HTML of div
    this.printpage=true;
    var divElements = document.getElementById(divID).innerHTML;
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;

    //Reset the page's HTML with div's HTML only
    document.body.innerHTML = 
      "<html><head><title></title></head><body><div></div>" + 
      divElements + "</body>";
    //Print Page
    window.print();
    //Restore orignal HTML
    document.body.innerHTML = oldPage;
}

   //delete order details
deleteorder(){
  let order_code = window.localStorage.getItem("delete");
  this.orderservice.orderdelete(order_code)
  .subscribe(order=>{
    if(order.status){
      alert("success");
      this.router.navigate(['/dashboard/orderlist']);
    }else{
      alert('failed')
    }
  })
}
}
