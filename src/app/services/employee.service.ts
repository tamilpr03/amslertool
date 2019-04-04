import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  employeelist(): Observable<Employee>{
  return this.http.get<Employee>("http://localhost/API/PROJECT/amsler_tool/employee/readall.php")
}
employeeview(emp_code):Observable<Employee>{
  return this.http.post<Employee>('http://localhost/API/PROJECT/amsler_tool/employee/readone.php',{emp_code})
  
}
employeeupdate(employee):Observable<Employee>{
  return this.http.post<Employee>('http://localhost/API/PROJECT/amsler_tool/employee/update.php',employee)
  
}
employeedelete(emp_code):Observable<Employee>{
  return this.http.post<Employee>('http://localhost/API/PROJECT/amsler_tool/employee/delete.php',{emp_code, httpOptions})
}
employeeadd(employee):Observable<Employee>{
  return this.http.post<Employee>('http://localhost/API/PROJECT/amsler_tool/employee/create.php',employee)
  
}
}
