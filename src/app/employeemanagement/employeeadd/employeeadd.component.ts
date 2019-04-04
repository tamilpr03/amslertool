import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {
  employeeadd:FormGroup;
  cancell=false;
  cancelll=true;
  constructor(private employeeservice:EmployeeService, private formbuilder:FormBuilder, private router:Router) {

    this.employeeadd=this.formbuilder.group({
      emp_name:["",Validators.required],
      emp_code:["",Validators.required]
    });
   }

  ngOnInit() {
  }
  cancel(){
 this.cancell=true;
 this.cancelll=false;
  }
  no(){
    this.cancell=false;
    this.cancelll=true;
     }
addemployee(){
  this.employeeservice.employeeadd(this.employeeadd.value)
  .subscribe(employee=>{
    if(employee.status){
      this.router.navigate(['/employeelist']);
    alert(employee.status)
  }
  });
}
}
