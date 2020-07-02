import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild} from '@angular/core';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { ActivatedRoute } from '@angular/router';
import { Publicador } from '../model/publicador';
import { PublicadorService } from '../publicador.service';
import { ContactoService } from '../contacto.service';
import { Contacto } from '../model/contacto';
import { AuthService } from '../auth.service';
import { Usuario } from '../model/usuario';

declare const $:any;

@Component({
  selector: 'app-show-vivienda',
  templateUrl: './show-vivienda.component.html',
  styleUrls: ['./show-vivienda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowViviendaComponent implements OnInit {
  vivienda:Vivienda;
  publicador:Publicador;
  codigoVivienda:any;
  codigoCliente:any;
  currDate = new Date();
  dt: string;
  contacto: Contacto = new Contacto();
  usuario:Usuario;  

  retrievedImage:any[]= [];
  base64Data: any[]= [];
  listaPlano: any[] = [];

  retrievedImageDiseno:any[]= [];
  base64DataDiseno: any[]= [];
  listaDiseno: any[] = [];

  cargo: Boolean = false;
  cargo2: Boolean = false;

  index: number = -1;
  cont:number = 0;

  constructor(private dataRoute: ActivatedRoute,private viviendaService: ViviendaService, 
              private publicadorService: PublicadorService, private contactoService:ContactoService, public authService:AuthService) { 
              this.codigoVivienda = parseInt(this.dataRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
    this.fetchEvent().then(() => {this.cargo = true; console.log(this.cargo)});
    this.fetchEventDiseno().then(() => {this.cargo2 = true; console.log(this.cargo2)});
    this.getVivienda();
    this.getPublicador();
    
    setTimeout(() => {
      this.divClick.nativeElement.click();
    }, 200);
  }

  ngAfterViewInit2(){
    $('#carouselExampleCaptions2').carousel()
  }

  mostrarPopup(){
    if(this.cont == 0){
      this.dt = this.currDate.getFullYear() + '-' + ('0' + (this.currDate.getMonth() + 1)).slice(-2) + '-' + ('0' + this.currDate.getDate()).slice(-2);
      this.contacto.fecha = this.dt;
      this.contactoService.nuevoContacto(this.contacto, this.codigoVivienda, this.usuario.cliente.codigo).subscribe(res => console.log("bien"));
    }

    var btnAbrirPopup = document.getElementById('btn-abrir-popup')
    var overlay = document.getElementById('overlay')
    var popup = document.getElementById('popup')

    btnAbrirPopup.addEventListener('click', function(){
      overlay.classList.add('active');
      popup.classList.add('active');
    });
    this.cont +=1;
  }

  fetchEvent(){
    return this.viviendaService.get.event(this.codigoVivienda).then(event => {
        this.listaPlano = event;
        console.log(this.listaPlano);
        
        for(let i = 0; i < this.listaPlano.length; i++){
          this.base64Data[i] = this.listaPlano[i].picByte;
          this.retrievedImage[i] = 'data:image/jpeg;base64,' + this.base64Data[i];
        }
    });
 }
 
 fetchEventDiseno(){
  return this.viviendaService.getDiseno.event(this.codigoVivienda).then(event => {
      this.listaDiseno = event;
      console.log(this.listaDiseno);
      
      for(let i = 0; i < this.listaDiseno.length; i++){
        this.base64DataDiseno[i] = this.listaDiseno[i].picByte;
        this.retrievedImageDiseno[i] = 'data:image/jpeg;base64,' + this.base64DataDiseno[i];
        console.log(this.retrievedImage[i])
      }
  });
}

getVivienda(){
  this.viviendaService.getVivienda(this.codigoVivienda).subscribe(vivienda => this.vivienda = vivienda);
}

getPublicador(){
  this.publicadorService.getPublicadorByVivienda(this.codigoVivienda).subscribe(publicador => this.publicador = publicador);
}

devuelveImagen(){
  if(this.index < 0)
    return this.retrievedImage[0]
  else
    return this.retrievedImage[this.index]
}

cargaImagen(index:number){
  this.index = index
}

 @ViewChild('divClick') divClick: ElementRef;

 getUrl()
  {
    //console.log(this.retrievedImage[0]);
    console.log(this.listaPlano.length);
    //return this.listaPlano.length > 0;
    console.log(this.cargo);
  }

}
