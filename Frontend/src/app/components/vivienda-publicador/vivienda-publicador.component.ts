import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from 'src/app/model/vivienda';
import { PublicadorService } from 'src/app/publicador.service';
import { ViviendaService } from 'src/app/vivienda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-vivienda-publicador',
  templateUrl: './vivienda-publicador.component.html',
  styleUrls: ['./vivienda-publicador.component.css']
})
export class ViviendaPublicadorComponent implements OnInit {

  viviendas: Observable<Vivienda[]>
  codigoPublicador: number;
  usuario: Usuario

  constructor(private publicadorServicio: PublicadorService, private servicioVivienda: ViviendaService, private router: Router, private dataRoute: ActivatedRoute,
    public authService: AuthService) { 
  }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
    this.viviendaPublicadorLista(this.usuario.publicador.codigo);
  }

  viviendaPublicadorLista(codigo:number){
    this.publicadorServicio.getViviendaList(codigo).subscribe(
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
