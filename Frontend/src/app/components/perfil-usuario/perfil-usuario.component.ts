import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

  codigoCliente: number;
  cliente: Cliente;
  constructor(private dataRoute: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.codigoCliente = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(this.codigoCliente).subscribe(res => {
        this.cliente = res;
        console.log(this.cliente);
      });
  }
}
