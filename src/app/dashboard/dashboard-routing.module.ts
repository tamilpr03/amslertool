import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeelistComponent } from '../employeemanagement/employeelist/employeelist.component';
import { EmployeeviewComponent } from '../employeemanagement/employeeview/employeeview.component';
import { EmployeeeditComponent } from '../employeemanagement/employeeedit/employeeedit.component';
import { EmployeeaddComponent } from '../employeemanagement/employeeadd/employeeadd.component';
import { OrderlistComponent } from '../ordermanagement/orderlist/orderlist.component';
import { OrdereditComponent } from '../ordermanagement/orderedit/orderedit.component';
import { OrderviewComponent } from '../ordermanagement/orderview/orderview.component';
import { OrderaddComponent } from '../ordermanagement/orderadd/orderadd.component';

const routes: Routes = [
  {
    path:'', 
    component:DashboardComponent,
      children:[
       {path:'d',component:SidebarComponent},
       {path:'b',component:TopbarComponent},
       {path:'employeelist',component:EmployeelistComponent},
       {path:'employeelist',component:EmployeelistComponent},
       {path:'employeeadd',component:EmployeeaddComponent},
       {path:'employeeview',component:EmployeeviewComponent},
       {path:'employeeedit',component:EmployeeeditComponent},
       {path:'',component:OrderlistComponent},
       {path:'orderlist',component:OrderlistComponent},
       {path:'orderedit',component:OrdereditComponent},
       {path:'orderview',component:OrderviewComponent},
       {path:'orderadd',component:OrderaddComponent},
      ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
