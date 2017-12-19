import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AccessService } from '../services/access.service';

/*
	Declaramos la variable JQuery es que vamos a querer utilizarlo
	en vez del dolar sino declaramos el dolar. 
	He indicamos que es de tipo any , para indicar que no me fuerce a que
	sea de un tpo en especifico sino por el contrario puede ser cualquier cosa.
*/
declare var JQuery:any;
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public accessUser : any;
	public msjeform;
	public tipomsje;
	constructor(
		private router : Router, 
		private route : ActivatedRoute,
		private user : UserService,
		private access : AccessService
	){
		console.log("iniciando");
	}

	ngOnInit() {
		this.accessUser = this.access.accessLogin();
		if(this.accessUser){
			this.router.navigate(['/dashboard']);
		}else{
      //console.log("xx la variable esta vacia");
      this.route.snapshot.queryParams['returnUrl'];
      //console.log('verificamos que la variable de session no este activa');
		  // implementar el redireccionamiento
    }
		
	}

	public loginUser(e){
		e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
    //console.log(e.target);
    
		let dataForm = e.target.elements; 
		let username = dataForm[0].value;
		let password = dataForm[1].value;
		let dataUser;
		this.accessUser = this.access.accessLogin();
    /*
      dataForm -> Son todos los elementos que tiene que mi formulario 
    */
    //console.log(dataForm); 
		//console.log(username, password);
		if (username == 'admin' && password == 'admin'){
			//console.log('ingreso');
			dataUser = [
				{
					id : 1,
					name : 'Carlos Espinoza',
					username : 'Kalin'	
				}
			]

			this.user.setUserLoggedIn(dataUser);
			//Lo que estamos indicando es que se diriga al dashboard
			this.accessUser = this.access.accessLogin();
			//this.router.navigate(['/dashboard']);
			window.location.href = "/dashboard";
		}else{
			this.tipomsje = "Error !";
			this.msjeform = "Sus credenciales son incorrectas";
			$("#alertBox").fadeIn("slow");
			window.setTimeout(function(){
				$("#alertBox").slideUp(500);
			},4000);
			//console.log('no ingreso');
		}
	}

}
