import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../model/color';
import { ClienteService } from '../cliente.service';
import { Estilo } from '../model/estilo';
import { AuthService } from '../auth.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  indicesEstilo: any[] = []
  indicesColor: any[] = []
  usuario:Usuario;
  constructor(private router:Router, private clienteServicio: ClienteService, public authService: AuthService ) { }

  ngOnInit(): void {

  }
  isEncuestaRoute(){
    return this.router.url == '/encuesta';
  }


  indiceEstilo(p:number){
    
    for(let indice of this.indicesEstilo){
      if (p == indice)
      {
        this.indicesEstilo.splice(this.indicesEstilo.indexOf(p),1);
        console.log(this.indicesEstilo)
        return
      }
    }
    this.indicesEstilo.push(p);

    console.log(this.indicesEstilo)
  }

  indiceColor(p:number){
    
    for(let indice of this.indicesColor){
      if (p == indice)
      {
        this.indicesColor.splice(this.indicesColor.indexOf(p),1);
        console.log(this.indicesColor)
        return
      }
    }

    this.indicesColor.push(p);

    console.log(this.indicesColor)
  }
  //se almacena en un array los items que van a ser agregar al back con respecto a un cliente
  anadirColores(){
    for (let indicecolor of this.indicesColor){
      if (indicecolor == 1){
        this.clienteServicio.registrarColor(new Color("Rojo"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 2){
        this.clienteServicio.registrarColor(new Color("Marron"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 3){
        this.clienteServicio.registrarColor(new Color("Azul"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 4){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 5){
        this.clienteServicio.registrarColor(new Color("Negro"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 6){
        this.clienteServicio.registrarColor(new Color("Rojo2"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 7){
        this.clienteServicio.registrarColor(new Color("Marron2"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 8){
        this.clienteServicio.registrarColor(new Color("Azul2"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 9){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso2"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 10){
        this.clienteServicio.registrarColor(new Color("Negro2"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 11){
        this.clienteServicio.registrarColor(new Color("Rojo3"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 12){
        this.clienteServicio.registrarColor(new Color("Marron3"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 13){
        this.clienteServicio.registrarColor(new Color("Azul3"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 14){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso3"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 15){
        this.clienteServicio.registrarColor(new Color("Negro3"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
    }
  }
  anadirEstilos(){
    for (let indiceestilo of this.indicesEstilo){
      if (indiceestilo == 1){
        this.clienteServicio.registrarEstilo(new Estilo("Aqua"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 2){
        this.clienteServicio.registrarEstilo(new Estilo("Majestuoso"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 3){
        this.clienteServicio.registrarEstilo(new Estilo("Elegante"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 4){
        this.clienteServicio.registrarEstilo(new Estilo("Seductor"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 5){
        this.clienteServicio.registrarEstilo(new Estilo("Monocromatico"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 6){
        this.clienteServicio.registrarEstilo(new Estilo("Vibrante"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 7){
        this.clienteServicio.registrarEstilo(new Estilo("Melancolico"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 8){
        this.clienteServicio.registrarEstilo(new Estilo("Moderno"), this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
      }
    }
  }
}
