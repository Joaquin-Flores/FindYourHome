import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-perfil-publicador',
  templateUrl: './perfil-publicador.component.html',
  styleUrls: ['./perfil-publicador.component.css']
})
export class PerfilpublicadorComponent implements OnInit {

  usuario:Usuario;
  publicador: Publicador;

  viviendas: Observable<Vivienda[]>

  constructor(private dataRoute: ActivatedRoute, private publicadorService: PublicadorService,private servicioVivienda: ViviendaService, private router: Router,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
    this.viviendaPublicadorList(this.usuario.publicador.codigo);
  }

  viviendaPublicadorList(codigo:number){
    this.publicadorService.getViviendaLista(codigo).subscribe(
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
  logOut(){
    this.authService.logout();
  }
}
