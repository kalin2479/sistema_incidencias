import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/*
	Declaramos la variable JQuery es que vamos a querer utilizarlo
	en vez del dolar sino declaramos el dolar. 
	He indicamos que es de tipo any , para indicar que no me fuerce a que
	sea de un tpo en especifico sino por el contrario puede ser cualquier cosa.
*/
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  constructor(
		private router : Router, 
		private route : ActivatedRoute
	) { }

  ngOnInit() {
    console.log("recargo");
  }

}
