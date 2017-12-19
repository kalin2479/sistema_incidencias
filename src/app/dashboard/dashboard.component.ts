import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  
  public accessUser : any;

  constructor(
    private access : AccessService
  ) { }

  ngOnInit() {
    this.accessUser = this.access.accessLogin();
    console.log(this.accessUser)
  }

}
