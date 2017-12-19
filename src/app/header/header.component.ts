import { Component, OnInit } from '@angular/core';

/*
	Declaramos la variable JQuery es que vamos a querer utilizarlo
	en vez del dolar sino declaramos el dolar. 
	He indicamos que es de tipo any , para indicar que no me fuerce a que
	sea de un tpo en especifico sino por el contrario puede ser cualquier cosa.
*/
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  private dameLista(e){
    if (e.find("ul").length > 0){
      return e.find("ul");
    }else{
      return this.dameLista(e.parent());
    }
  }

  private cerrarNav(){
    //$('.toolNav a ul').slideUp(300).removeClass('active');
    $('.toolNav a ul').removeClass('active');
  }

  public viewoptionNav(e){
    let event = $(e.target);
    let lista = this.dameLista(event);
    if($(lista).is('.active')) {
        this.cerrarNav();
    }else{
      this.cerrarNav();
      //lista.slideDown(300).addClass('active');
      lista.addClass('active');
    }
  }
}
