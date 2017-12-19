import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

	constructor() {}

	public setUserLoggedIn(data){
		localStorage.setItem('isUserLoggedIn', 'true');
		localStorage.setItem('userName', data[0].username);
	}

	public setUserLogout(){
		localStorage.removeItem('isUserLoggedIn');
		localStorage.removeItem('userName');
	}

}