import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent implements OnInit {

  codigoCliente: number;
  cliente: any={};

  constructor(private dataRoute: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.codigoCliente = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(this.codigoCliente).subscribe(res => {
        this.cliente = res;
        console.log(this.cliente);
      });
  }

}
