import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeelistComponent } from '../employeemanagement/employeelist/employeelist.component';
import { EmployeeviewComponent } from '../employeemanagement/employeeview/employeeview.component';
import { EmployeeeditComponent } from '../employeemanagement/employeeedit/employeeedit.component';
import { EmployeeaddComponent } from '../employeemanagement/employeeadd/employeeadd.component';
import { OrderlistComponent } from '../ordermanagement/orderlist/orderlist.component';
import { OrderviewComponent } from '../ordermanagement/orderview/orderview.component';
import { OrdereditComponent } from '../ordermanagement/orderedit/orderedit.component';
import { OrderaddComponent } from '../ordermanagement/orderadd/orderadd.component';

import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    EmployeelistComponent,
    EmployeeviewComponent,
    EmployeeeditComponent,
    EmployeeaddComponent,
    OrderlistComponent,
    OrderviewComponent,
    OrdereditComponent,
    OrderaddComponent 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [AuthService,EmployeeService,ProductService,OrderService],
})
export class DashboardModule { }
