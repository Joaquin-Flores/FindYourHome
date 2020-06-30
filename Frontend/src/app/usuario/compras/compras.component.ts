import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Vivienda } from 'src/app/model/vivienda';
import { DomSanitizer } from '@angular/platform-browser';
import { ViviendaService } from 'src/app/vivienda.service';
import { NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  codigoCliente: number;
  cliente: Cliente;
  viviendas: Vivienda[] = [];
  retrievedImage: any[] = [];
  response: any;
  index:number = 0;
  esPosible: Promise<Boolean>;
  evento: Event;


  constructor(private domSanitizer: DomSanitizer,private dataRoute: ActivatedRoute, private clienteService: ClienteService, private viviendaService: ViviendaService) { 
    this.codigoCliente = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.clienteService.getCliente(this.codigoCliente).subscribe(res => {
        this.cliente = res;
        console.log("je");
    });
    this.clienteService.getViviendaContacto(this.codigoCliente).subscribe(res =>{
      this.viviendas = res;
      console.log(res);
    },
    err => {
      console.log(err);
    },
    () => {
      this.index = 0
      this.obtenerImagen(this.viviendas, this.viviendas.length, this.index);
    });
  }

  obtenerImagen(vivienda, length, indice){
    console.log(this.esPosible)
    if(indice < length){
      console.log(vivienda[indice])
      this.viviendaService.getImagen(vivienda[indice].codigo).subscribe(event => {
        this.retrievedImage.push('data:image/jpeg;base64,' + (this.domSanitizer.bypassSecurityTrustResourceUrl(event.picByte) as any).changingThisBreaksApplicationSecurity);
      },
      err => {
        console.log(err);
      },
      () => {
        this.obtenerImagen(vivienda, length, indice+=1)
      });
    }
    else{
      this.esPosible = Promise.resolve(true);
      console.log(this.esPosible)
    }
  }
}
