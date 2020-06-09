import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  
  cliente:Cliente= new Cliente();

  constructor(private clienteServicio: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }
  actualizar(){
    console.log("Click");
    console.log(this.cliente);
    this.clienteServicio.actualizarCliente(this.cliente).subscribe(
      data => console.log(data)
    );
  }
}
