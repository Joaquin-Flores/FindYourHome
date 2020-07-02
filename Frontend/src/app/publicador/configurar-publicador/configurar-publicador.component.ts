import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-configurar-publicador',
  templateUrl: './configurar-publicador.component.html',
  styleUrls: ['./configurar-publicador.component.css']
})
export class ConfigurarPublicadorComponent implements OnInit {

  usuario:Usuario;

  constructor(private dataRoute: ActivatedRoute, private publicadorService: PublicadorService, public authService:AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
  }

  logOut(){
    this.authService.logout();
  }
}
