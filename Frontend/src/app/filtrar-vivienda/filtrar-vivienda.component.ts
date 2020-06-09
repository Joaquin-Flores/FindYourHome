import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-filtrar-vivienda',
  templateUrl: './filtrar-vivienda.component.html',
  styleUrls: ['./filtrar-vivienda.component.css']
})
export class FiltrarViviendaComponent implements OnInit {

  viviendas: Vivienda[] = []
  ubicacion: "";
  idVivienda: number;

  retrievedImage:any[]= [];
  base64Data: any[]= [];
  imagen: any[] = [];
  indice: number = 0;
  condicion:Boolean = false;
  i: number = -1;

  constructor(private domSanitizer: DomSanitizer,private viviendaService: ViviendaService) { }

  ngOnInit(): void {
  }
  
  filtrarVivienda(){
    this.viviendaService.filtrarVivienda(this.ubicacion).subscribe(
      viviendas => this.viviendas = viviendas
    );
  }

  fetchEvent(codigoVivienda:any){
    if (this.indice<this.viviendas.length){
      console.log("bienenen")
      console.log(codigoVivienda)
      this.viviendaService.getImagen(codigoVivienda).subscribe(event => {
        if(this.imagen.length<this.viviendas.length){
          this.imagen[this.indice] = event;
          console.log(this.imagen);
        
          this.base64Data[this.indice] = this.imagen[this.indice].picByte;
          this.retrievedImage[this.indice] = 'data:image/jpeg;base64,' + (this.domSanitizer.bypassSecurityTrustResourceUrl(this.base64Data[this.indice]) as any).changingThisBreaksApplicationSecurity;
          console.log(this.retrievedImage);
          this.indice += 1;
        }
      });
    }
 }


 compruebaIndice(indice:any){
  if(this.i != indice){
    return true;
  }
  else
    return false;
 }

  he(){
    console.log(this.retrievedImage)
  }

}