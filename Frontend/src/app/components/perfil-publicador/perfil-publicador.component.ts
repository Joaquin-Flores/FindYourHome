import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';

@Component({
  selector: 'app-perfil-publicador',
  templateUrl: './perfil-publicador.component.html',
  styleUrls: ['./perfil-publicador.component.css']
})
export class PerfilpublicadorComponent implements OnInit {

  codigoPublicador: number;
  viviendas: Observable<Vivienda[]>
  publicador: Publicador;

  constructor(private dataRoute: ActivatedRoute, private publicadorService: PublicadorService,private servicioVivienda: ViviendaService, private router: Router) { }

  ngOnInit(): void {
    this.codigoPublicador = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
    this.publicadorService.getPublicador(this.codigoPublicador).subscribe(res => {
        this.publicador = res;
        console.log(this.publicador);
      });
    this.viviendaPublicadorList(this.codigoPublicador);
  }

  viviendaPublicadorList(codigo:number){
    this.publicadorService.getViviendaLista(codigo).subscribe(
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
