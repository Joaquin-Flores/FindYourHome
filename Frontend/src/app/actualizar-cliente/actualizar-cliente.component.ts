import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  
  cliente:Cliente= new Cliente();
  usuario:Usuario;

  constructor(private clienteServicio: ClienteService, private router: Router, public authService:AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
  }
  actualizar(){
    console.log("Click");
    console.log(this.cliente);
    this.clienteServicio.actualizarCliente(this.cliente,this.usuario.cliente.codigo).subscribe(
      data => console.log(data)
    );
  }
}
