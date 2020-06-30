import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  codigoPublicador: number;
  publicador: any={};
  viviendas: Vivienda[] = [];
  retrievedImage: any[] = [];
  index:number = 0;

  constructor(private domSanitizer: DomSanitizer,private dataRoute: ActivatedRoute, private publicadorService: PublicadorService,private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.codigoPublicador = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
    this.publicadorService.getPublicador(this.codigoPublicador).subscribe(res => {
        this.publicador = res;
        console.log(this.publicador);
      });

    this.publicadorService.getViviendaByPublicador(this.codigoPublicador).subscribe(res =>{
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
    if(indice < length){
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
  }
}