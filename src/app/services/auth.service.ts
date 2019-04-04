import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(emp_name: string, emp_password: string) {
    return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/u_password_auth/login.php`, { emp_name, emp_password })
        .pipe(map(user => {
           

            return user;
        }));
}

//employee login part with email otp

sendotpdb(username: string, otp: number) {
  return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/e_otp_auth/sendotp.php`, { username, otp })
}

sendotpemail(username: string, otp: number) {
  return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/e_otp_auth/email.php`, { username, otp })
}

usercheck(username: string) {
  return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/e_otp_auth/usercheck.php`, { username})
}

employeelogin(username: string, otp: number) {
  return this.http.post<any>(`http://localhost/API/PROJECT/amsler_tool/auth/e_otp_auth/loginwithotp.php`, { username, otp })
}


logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}

}
