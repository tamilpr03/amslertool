import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';
import { AuthDashboardComponent } from './auth/auth-dashboard/auth-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';







@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    AuthDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,EmployeeService,ProductService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
