import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from 'src/app/model/vivienda';
import { PublicadorService } from 'src/app/publicador.service';
import { ViviendaService } from 'src/app/vivienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vivienda-publicador',
  templateUrl: './vivienda-publicador.component.html',
  styleUrls: ['./vivienda-publicador.component.css']
})
export class ViviendaPublicadorComponent implements OnInit {

  viviendas: Observable<Vivienda[]>

  constructor(private publicadorServicio: PublicadorService, private servicioVivienda: ViviendaService, private router: Router) { }

  ngOnInit(): void {
    this.viviendaPublicadorList();
  }

  viviendaPublicadorList(){
    this.publicadorServicio.getViviendaList().subscribe(
      viviendas => this.viviendas = viviendas
    );
  }

  eliminarVivienda(codigo:number){
    this.servicioVivienda.eliminarVivienda(codigo).subscribe(
      data => this.router.navigate(['/registroEntidades/newVivienda/viviendapublicador'])
    );
  }


  refresh(): void {
    window.location.reload();
  }

}
