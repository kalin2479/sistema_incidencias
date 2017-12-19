import { Component } from '@angular/core';
import { AccessService } from './services/access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  public accessUser : any;
  constructor (
    private access : AccessService
  ){}

	ngOnInit() {
    this.accessUser = this.access.accessLogin();
		console.log(this.accessUser);
  }
  
}
