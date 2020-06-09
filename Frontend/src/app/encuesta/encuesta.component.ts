import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../model/color';
import { ClienteService } from '../cliente.service';
import { Estilo } from '../model/estilo';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  indicesEstilo: any[] = []
  indicesColor: any[] = []
  
  constructor(private router:Router, private clienteServicio: ClienteService) { }

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
        this.clienteServicio.registrarColor(new Color("Rojo")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 2){
        this.clienteServicio.registrarColor(new Color("Marron")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 3){
        this.clienteServicio.registrarColor(new Color("Azul")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 4){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 5){
        this.clienteServicio.registrarColor(new Color("Negro")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 6){
        this.clienteServicio.registrarColor(new Color("Rojo2")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 7){
        this.clienteServicio.registrarColor(new Color("Marron2")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 8){
        this.clienteServicio.registrarColor(new Color("Azul2")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 9){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso2")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 10){
        this.clienteServicio.registrarColor(new Color("Negro2")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 11){
        this.clienteServicio.registrarColor(new Color("Rojo3")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 12){
        this.clienteServicio.registrarColor(new Color("Marron3")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 13){
        this.clienteServicio.registrarColor(new Color("Azul3")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 14){
        this.clienteServicio.registrarColor(new Color("Turquesa verdoso3")).subscribe(res => console.log("bien"));
      }
      if (indicecolor == 15){
        this.clienteServicio.registrarColor(new Color("Negro3")).subscribe(res => console.log("bien"));
      }
    }
  }

  anadirEstilos(){
    for (let indiceestilo of this.indicesEstilo){
      if (indiceestilo == 1){
        this.clienteServicio.registrarEstilo(new Estilo("Aqua")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 2){
        this.clienteServicio.registrarEstilo(new Estilo("Majestuoso")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 3){
        this.clienteServicio.registrarEstilo(new Estilo("Elegante")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 4){
        this.clienteServicio.registrarEstilo(new Estilo("Seductor")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 5){
        this.clienteServicio.registrarEstilo(new Estilo("Monocromatico")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 6){
        this.clienteServicio.registrarEstilo(new Estilo("Vibrante")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 7){
        this.clienteServicio.registrarEstilo(new Estilo("Melancolico")).subscribe(res => console.log("bien"));
      }
      if (indiceestilo == 8){
        this.clienteServicio.registrarEstilo(new Estilo("Moderno")).subscribe(res => console.log("bien"));
      }
    }
  }
}
