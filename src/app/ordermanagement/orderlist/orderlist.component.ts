import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
declare var $:any;

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders: Order;
  constructor( public orderservice:OrderService, private router:Router) { 
   
  }
  ngOnInit() {
        
    //list all employee
    this.orderlist();
    
  }

    //list all data
  orderlist(){
    this.orderservice.orderlist()
    .subscribe(orders=>{
      
      this.orders=orders['records'];
      console.log(orders['records'][0].order_status);
                //its data table  scrsipts
      $(document).ready(function () {
        $('#dtBasicExample').DataTable();
        });
    }
      );
  }
  
  //click to view data
  orderview(orders:Order): void{
    window.localStorage.removeItem("view");
    window.localStorage.removeItem("edit");
    window.localStorage.removeItem("delete");
    window.localStorage.setItem("view", orders.order_code.toString());
    window.localStorage.setItem("edit", orders.order_code.toString());
    window.localStorage.setItem("delete", orders.order_code.toString());
    this.router.navigate(['/dashboard/orderview']);
  }

}

