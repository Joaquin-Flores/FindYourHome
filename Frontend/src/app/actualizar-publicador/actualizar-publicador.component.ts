import { Component, OnInit } from '@angular/core';
import { Publicador } from '../model/publicador';
import { PublicadorService } from '../publicador.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-publicador',
  templateUrl: './actualizar-publicador.component.html',
  styleUrls: ['./actualizar-publicador.component.css']
})
export class ActualizarPublicadorComponent implements OnInit {

  publicador:Publicador= new Publicador();
  codigoPublicador: number;
  constructor(private publicadorServicio: PublicadorService, private router: Router) { }

  ngOnInit(): void {

  }
  actualizar(){
    console.log("Click");
    console.log(this.publicador);
    this.publicadorServicio.actualizarPublicador(this.publicador).subscribe(
      data => console.log(data)
    );
  }

}
