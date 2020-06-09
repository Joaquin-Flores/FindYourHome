import { Component, OnInit } from '@angular/core';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicar-inmueble',
  templateUrl: './publicar-inmueble.component.html',
  styleUrls: ['./publicar-inmueble.component.css']
})
export class PublicarInmuebleComponent implements OnInit {

  vivienda: Vivienda = new Vivienda();

  constructor(private viviendaServicio: ViviendaService, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  registrarInmueble(){
    this.viviendaServicio.createVivienda(this.vivienda).subscribe(
      data => this.router.navigate(['/registroEntidades/viviendapublicador'])
    );
  }

}
