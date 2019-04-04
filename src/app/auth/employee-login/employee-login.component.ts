import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormm: FormGroup;
  loading = false;
  showlogin =  false;
  submitted = false;
  returnUrl: string;
  error = '';
  sendotpbtn='Send OTP';
  
  otp:number;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required]
      });

      this.loginFormm = this.formBuilder.group({
          
          otp: ['', Validators.required]
      });

      // reset login status
      this.authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      var gen= Math.floor(Math.random() * 1000) + 1999;
      this.otp=gen;
  }

  // convenience getter for easy access to form fieldss
  get f() { return this.loginForm.controls; }
  get g() { return this.loginFormm.controls; }
  

  login(){
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginFormm.invalid) {
          return;
      }
      this.authService.employeelogin(this.f.username.value, this.g.otp.value)
          .subscribe(
              data => {
                if(data.status) {
                  window.alert(data.message)
                  localStorage.setItem('currentUser', JSON.stringify(data));
                  this.router.navigate(['dashboard'])
                } else {
                  this.error = data.message;
                  window.alert(data.message)
                }
              })
  }
  sendotp() {
      this.submitted = true;
      this.sendotpbtn="Resend OTP";
      // stop here if form is invalidd
      if (this.loginForm.invalid) {
          return;
      }
      this.authService.usercheck(this.f.username.value)
      .subscribe(
      data => {
          if(data.status) {
              this.showlogin=true;
              this.sendotpdb()
              this.sendotpemail()
              window.alert(data.message)                
            } else {
              this.error = data.message;
              window.alert(data.message)
            }
      })
  }

  sendotpdb() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.authService.sendotpdb(this.f.username.value, this.otp)
      .subscribe(
      data => {
          
      })
  }
  sendotpemail() {
      this.submitted = true;
      // stop here if form is invalids
      if (this.loginForm.invalid) {
          return;
      }
      this.authService.sendotpemail(this.f.username.value, this.otp)
      .subscribe(
      data => {
          window.alert(data.message)
      })
  }
            
          
}
          
