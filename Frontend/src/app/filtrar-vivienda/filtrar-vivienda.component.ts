import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';


@Component({
  selector: 'app-filtrar-vivienda',
  templateUrl: './filtrar-vivienda.component.html',
  styleUrls: ['./filtrar-vivienda.component.css']
})
export class FiltrarViviendaComponent implements OnInit {

  viviendas: Observable<Vivienda[]>
  ubicacion: "";
  idVivienda: number;

  retrievedImage:any;
  base64Data: any;
  imagen: any;

  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
  }
  
  filtrarVivienda(){
    console.log("he")
    this.viviendaService.filtrarVivienda(this.ubicacion).subscribe(
      viviendas => this.viviendas = viviendas
    );
    setTimeout(() => {
      this.divClick.nativeElement.click();
    },15);
  }

  fetchEvent(codigoVivienda:any){
    console.log("bienenen")
    this.viviendaService.getImagen(codigoVivienda).subscribe(event => {
        this.imagen = event;
        console.log(this.imagen);
        
        this.base64Data = this.imagen.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        console.log(this.retrievedImage);
    });
 }

  setidVivienda(id:number){
    this.idVivienda = id;
  }

  @ViewChild('divClick') divClick: ElementRef;
}