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
  constructor( private orderservice:OrderService, private router:Router) { 
    //its data table  scrsipts
    $(document).ready(function () {
      $('#dtBasicExample').DataTable();
      $('.dataTables_length').addClass('bs-select');
      });
  }

  ngOnInit() {
    
//list all employee
    this.orderservice.orderlist()
    .subscribe(orders=>this.orders=orders['records']);
    
  }
  orderview(orders:Order): void{
    window.localStorage.removeItem("editemp_code");
    window.localStorage.setItem("editemp_code", orders.order_code.toString());
    this.router.navigate(['/orderview']);
  }

}

