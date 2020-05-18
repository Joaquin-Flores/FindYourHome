import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  clientes: Observable<Cliente[]>

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    console.log("llamando al servicio");
    this.clienteService.getClienteList().subscribe(
      clientes => this.clientes = clientes
    )
  }
}
