import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  username;  
   
  constructor(private router:Router) { }

  ngOnInit() {
    var username=window.localStorage.getItem("user");
    this.username=username;
  }
  logout(){
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("permission");
    window.localStorage.removeItem("currentUser");
    window.alert("Successfully logged out..")
    this.router.navigate[('authdashboard')]
  }
}
