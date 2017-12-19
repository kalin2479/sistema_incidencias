import { Injectable } from '@angular/core';

@Injectable() // esto es un decorador por eso no lleva ni punto ni coma ni nada
export class AccessService {
   
  constructor() { }

  public accessLogin(){
    if (localStorage.getItem('isUserLoggedIn'))
      return true;
    else
      return false;
  }

}
