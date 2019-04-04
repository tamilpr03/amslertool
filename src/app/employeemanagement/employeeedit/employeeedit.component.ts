import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
  update_product_form: FormGroup;
  employee:Employee;
  //emp_code="emp001";
  

  constructor(private employeeservice:EmployeeService, private formbuilder:FormBuilder, private router:Router) { 
    
    this.update_product_form=this.formbuilder.group({
      emp_name:["",Validators.required],
      emp_code:["",Validators.required]
    });
  }
  
  delete(){
    this.router.navigate(['/employeeview']);
  }
  ngOnInit(){
    let emp_code = window.localStorage.getItem("editemp_code");
    // read one product record
    this.employeeservice.employeeview(emp_code)
        .subscribe(employee => {

            // put values in the form
            this.update_product_form.patchValue({
                emp_name: employee.emp_name,
                emp_code: employee.emp_code
            });
        });
}
updateProduct(){
        this.employeeservice.employeeupdate(this.update_product_form.value)
        .subscribe(employee=>{
          if(employee.status){
          alert("Updated")
          this.router.navigate(['/employeeview'])
        }else{
          alert('failed')
        }
        });
}

}
