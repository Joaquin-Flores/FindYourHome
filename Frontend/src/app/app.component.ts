import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrabajoWeb';
  /* 
  isClickedListado:boolean = true;
  isClickedRegistro:boolean = true;

  toggleisClickedListado(){
    this.isClickedListado = !this.isClickedListado;
  }

  toggleisClickedRegistro(){
    this.isClickedRegistro = !this.isClickedRegistro;
  }*/
  constructor(private router:Router){} 

  isHomeRoute(){
    return this.router.url == '/home';
  }
}
