import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
declare var Ps:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    
  }
  toggle(){
    var x = document.getElementById("sidenav");
    var y= document.getElementById("togglemenu");
    if(x.style.width==="180px"){
      x.style.width = "0px";
      y.style.marginLeft = "20px";
    }else{
      x.style.width="180px";
      y.style.marginLeft="200px";
    }
  }
  employeelist(){
    this.router.navigate(["dashboard/employeelist"]);
  }
}
