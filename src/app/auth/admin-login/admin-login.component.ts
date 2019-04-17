import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  status:string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthService
  ) {
      // redirect to home if already logged in
     
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          emp_name: ['', Validators.required],
          emp_password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.emp_name.value, this.f.emp_password.value)
          .subscribe(
              data => {
                if(data.status){
                  window.alert(data.message)
                  this.router.navigate(['dashboard']);
                  localStorage.setItem("user",data.emp_name);
                  localStorage.setItem("permission",data.permission);
                  localStorage.setItem('currentUser', JSON.stringify(data));
                }else{
                  alert("login failed");
                }
                  
              });
  }
}

