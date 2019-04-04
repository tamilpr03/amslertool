import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {

  employee:Employee;
  deletee=false;
  vieww=true;
  constructor(private employeeservice:EmployeeService, private router:Router) { }

  ngOnInit() {
    let emp_code = window.localStorage.getItem("editemp_code");
    if(!emp_code) {
      alert("Invalid action.")
      this.router.navigate(['employeelist']);
      return;
    }
    this.employeeservice.employeeview(emp_code)
        .subscribe(employee => this.employee=employee);
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
    let emp_code = window.localStorage.getItem("editemp_code");
    this.employeeservice.employeedelete(emp_code)
    .subscribe(employee=>{
      if(employee.status){
        alert("success");
        this.router.navigate(['/employeelist']);
      }else{
        alert('failed')
      }
    })
  }

}
