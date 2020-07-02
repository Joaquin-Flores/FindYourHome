import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

  usuario:Usuario;
  constructor(private dataRoute: ActivatedRoute, private clienteService: ClienteService, public authService:AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario
  }

  logOut(){
    this.authService.logout();
  }
}
