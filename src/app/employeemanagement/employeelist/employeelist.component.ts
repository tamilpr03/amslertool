import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee;
  constructor( private employeeservice:EmployeeService, private router:Router) { 
    //its data table  scrsipts
    $(document).ready(function () {
      $('#dtBasicExample').DataTable();
      $('.dataTables_length').addClass('bs-select');
      });
  }

  ngOnInit() {
    
//list all employee
    this.employeeservice.employeelist()
    .subscribe(employees=>this.employees=employees['records']);
    
  }
  employeeview(employee:Employee): void{
    window.localStorage.removeItem("editemp_code");
    window.localStorage.setItem("editemp_code", employee.emp_code.toString());
    this.router.navigate(['/employeeview']);
  }

}
