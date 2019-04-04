import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthDashboardComponent } from './auth/auth-dashboard/auth-dashboard.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';

const routes: Routes = [
  {path:'', loadChildren:'./dashboard/dashboard.module#DashboardModule'},

  {path:'authdashboard', component:AuthDashboardComponent},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'employeelogin', component:EmployeeLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
