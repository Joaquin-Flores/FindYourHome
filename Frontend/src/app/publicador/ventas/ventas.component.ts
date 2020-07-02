import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  viviendas: Vivienda[] = [];
  retrievedImage: any[] = [];
  index:number = 0;
  usuario:Usuario;

  constructor(private domSanitizer: DomSanitizer,private dataRoute: ActivatedRoute, private publicadorService: PublicadorService,private viviendaService: ViviendaService,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
    this.publicadorService.getViviendaByPublicador(this.usuario.publicador.codigo).subscribe(res =>{
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

  logOut(){
    this.authService.logout();
  }
}