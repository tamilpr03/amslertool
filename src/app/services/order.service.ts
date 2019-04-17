import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Customer } from '../model/customer';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  orderlist(): Observable<Order>{
  return this.http.get<Order>("http://localhost/API/PROJECT/amsler_tool/order/readall.php")
}
orderview(order_code):Observable<Order>{
  return this.http.post<Order>('http://localhost/API/PROJECT/amsler_tool/order/readone.php',{order_code})
  
}
orderupdate(order):Observable<Order>{
  return this.http.post<Order>('http://localhost/API/PROJECT/amsler_tool/order/update.php',order)
  
}
orderdelete(order_code):Observable<Order>{
  return this.http.post<Order>('http://localhost/API/PROJECT/amsler_tool/order/delete.php',{order_code, httpOptions})
}
orderadd(order):Observable<Order>{
  return this.http.post<Order>('http://localhost/API/PROJECT/amsler_tool/order/create.php',order)
  
}
customeradd(order):Observable<Order>{
  return this.http.post<Order>('http://localhost/API/PROJECT/amsler_tool/customer/create.php',order)
  
}
customerview(order_code):Observable<Customer>{
  return this.http.post<Customer>('http://localhost/API/PROJECT/amsler_tool/customer/readone.php',{order_code})
  
}
sendmail_tocustomer(cus_email: string, cus_name: string, customer_code: string, order_code: string){
  return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/e_otp_auth/order_conformation_tocustomer.php`, {order_code,customer_code,cus_email,cus_name})
}
}
