import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from 'src/app/model/vivienda';
import { PublicadorService } from 'src/app/publicador.service';
import { ViviendaService } from 'src/app/vivienda.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vivienda-publicador',
  templateUrl: './vivienda-publicador.component.html',
  styleUrls: ['./vivienda-publicador.component.css']
})
export class ViviendaPublicadorComponent implements OnInit {

  viviendas: Observable<Vivienda[]>
  codigoPublicador: number;

  constructor(private publicadorServicio: PublicadorService, private servicioVivienda: ViviendaService, private router: Router, private dataRoute: ActivatedRoute) { 
    this.codigoPublicador = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.viviendaPublicadorLista(this.codigoPublicador);
  }

  viviendaPublicadorLista(codigo:number){
    this.publicadorServicio.getViviendaLista(codigo).subscribe(
      viviendas => this.viviendas = viviendas
    );
  }

  eliminarVivienda(codigo:number){
    this.servicioVivienda.eliminarVivienda(codigo).subscribe(
      data => this.router.navigate(['/registroEntidades/newVivienda/viviendapublicador/', this.codigoPublicador])
    );
  }


  refresh(): void {
    window.location.reload();
  }

}
