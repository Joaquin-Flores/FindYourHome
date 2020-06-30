import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicadorService } from '../publicador.service';
import { Observable } from 'rxjs';
import { Publicador } from '../model/publicador';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';
import { ListadeseoService } from '../listadeseo.service';
import { Listadeseo } from '../model/listadeseo';
import { ActivatedRoute } from '@angular/router';
import * as Mapboxgl from 'mapbox-gl';
import { Auspiciador} from 'src/app/model/auspiciador';
import { AuspiciadorService } from 'src/app/auspiciador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filtrar-vivienda',
  templateUrl: './filtrar-vivienda.component.html',
  styleUrls: ['./filtrar-vivienda.component.css']
})
export class FiltrarViviendaComponent implements OnInit {
  retrievedImage: any[] = [];
  viviendasInicial: Vivienda[] = []
  listaDeseo: Listadeseo = new Listadeseo();
  cliente: Cliente;
  idVivienda: number;
  publicador: Observable<Publicador>
  auspiciador: Observable<Auspiciador[]>;;
  codigoCliente:number;
  viviendas: Vivienda[] = [];
  viviendas2:Vivienda[]=[ ]
  listaUbicacion: any[] = [];
  ubicacion: String = "";
  nBano: number = null;
  nHabitacion: number = null;
  pMin: number = null;
  pMax: number = null;
  indice: number = 0;
  cond : Boolean = false;
  auspiciador: Observable<Auspiciador[]>;;
  title = 'TrabajoWeb';
  latitud: any={};
  longitud: any={};
  lat1: number=-12.1139569;
  lon1: number=-77.0053;
  address: "";
  coorde:any={};
  mapa: Mapboxgl.Map; 
  marker: Mapboxgl.Marker;
  currentMarkers=[];
  constructor(private auspiciadorServicio: AuspiciadorService,private domSanitizer: DomSanitizer,private viviendaService: ViviendaService, private publicadorServicio:PublicadorService, private clienteService:ClienteService, private listaDeseoService: ListadeseoService,private dataRoute: ActivatedRoute) { 
    this.codigoCliente = parseInt(this.dataRoute.snapshot.paramMap.get('id'))}
  

registrarMarcadores(vivi: Vivienda[]){   
  for (let index of this.viviendas){ 
    this.getO(index.ciudad,index.numero,index.distrito,index.direccion)}
}  
viviendaPublicadorList(): any{
      return this.publicadorServicio.getViviendaList().subscribe(
        data => {
          this.viviendas = data
          this.registrarMarcadores(this.viviendas);
        }
      );
    }
    crearMarcador(lng:number, lat:number){
      console.info("ENtro a crear marcador");
       var marker = new Mapboxgl.Marker({draggable: false}).setLngLat([lng, lat]).addTo(this.mapa); 
       marker.on('drag',()=> {console.log(marker.getLngLat()) }) 
       this.currentMarkers.push(marker);
     
     }
     
                
  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey; 
    this.mapa = new Mapboxgl.Map({container: 'mapa1-mapbox',  style: 'mapbox://styles/mapbox/streets-v11',center: [this.lon1,this.lat1], zoom: 10 });    
    
    var nav = new Mapboxgl.NavigationControl();
    this.mapa.addControl(nav,"top-left");     
    console.log(this.codigoCliente)
   
    this.clienteService.getCliente(1).subscribe(res => {this.cliente = res; console.log(res)});
    this.viviendaService.getViviendaList().subscribe(
      res => {this.viviendasInicial = res },
      err =>{ console.log(err); }, () => { this.fetchEvent(this.indice) }
    );
    this.viviendaPublicadorList();
    this.auspiciadorList();
    this.filtradoMapa(this.ubicacion);
  }
  auspiciadorList(){
    this.auspiciadorServicio.getAuspiciadorist().subscribe(
      auspiciador => this.auspiciador=auspiciador
    );
  }
getO(direccion: String, ciudad:String, numero:String, distrito:String){
    return this.publicadorServicio.getJson('https://maps.googleapis.com/maps/api/geocode/json?address='
    +direccion+ciudad+numero+distrito+'&key=AIzaSyBigtXRIe8TfStJYbeijp-yRX6f7wpzrOE').subscribe(res=> { 
    //this.latitud=res+".results[0].geometry.location.lat";
    //this.longitud=res+".results[0].geometry.location.lng";
    if (res==Array(0)){
      this.latitud="";
      this.longitud="";
    }
    else{
      this.latitud=res;
      this.longitud=res;
    }
    console.info("Se creó");
  this.coorde=res;
  console.log(res);
  console.log(this.latitud.results[0].geometry.location.lat); 
  console.log(this.longitud.results[0].geometry.location.lng); 
  this.lon1=this.longitud.results[0].geometry.location.lng;
  this.lat1=this.latitud.results[0].geometry.location.lat;

  this.crearMarcador(this.lon1,this.lat1);
  });
  
  }

filtradoMapa(ubicacion:String){
  for (let index of this.viviendas){ 
    if (index.distrito=ubicacion){
    this.getO(index.ciudad,index.numero,index.distrito,index.direccion)
  }
   }

}
 
fetchEvent(indice){
    if(indice<this.viviendasInicial.length){
      console.log(this.viviendasInicial[indice].fueContactado)
      this.viviendaService.getImagen(indice+1).subscribe(event => {
        this.retrievedImage.push('data:image/jpeg;base64,' + (this.domSanitizer.bypassSecurityTrustResourceUrl(event.picByte) as any).changingThisBreaksApplicationSecurity);
      },
      err => {
        console.log(err);
      },
      () => {
        //console.log(this.retrievedImage)
        this.fetchEvent(this.indice+=1)
      });
    }
 }


 

 filtrarVivienda(){
  
  console.log(this.listaUbicacion.length)
  if(this.listaUbicacion.length == 0){
    this.listaUbicacion.push("a")
  }
  this.viviendaService.filtradoGeneral(this.listaUbicacion, this.pMin, this.pMax, this.nHabitacion, this.nBano).subscribe(
    viviendas => this.viviendas = viviendas
  );
  if (this.currentMarkers!==null) {
    for (var i = this.currentMarkers.length - 1; i >= 0; i--) {
      this.currentMarkers[i].remove();
    }
}
 this.registrarMarcadores(this.viviendas);


}

encontroResultado(){
  if(!this.viviendas){
    return true;
  }
  return false;
}

buscarGeneral(){
  if(this.ubicacion == ""){
    this.ubicacion = " ";
  }
  if(this.nBano == null){
    this.nBano  = 0;
  }
  if(this.nHabitacion == null){
    this.nHabitacion  = 0;
  }
  if(this.pMin == null){
    this.pMin = 0;
  }
  if(this.pMax == null){
    this.pMax = 0;
  }
  this.indice = 0;
 }

 limpiarFiltro(){
  this.ubicacion = "";
  this.nBano  = null;
  this.nHabitacion  = null;
  this.pMin = null;
  this.pMax = null;
  this.indice = null;
  this.cond = true;
  this.listaUbicacion = []
  console.log(this.listaUbicacion)
 }

 anadirFavorito(codigo){
   console.log(this.cliente)
   this.listaDeseoService.crearListaDeseo(this.cliente.codigo, codigo, this.listaDeseo).subscribe(res => console.log("bien"))
 }

 anadirUbicacion(ubicacion){
   if(this.listaUbicacion.includes(ubicacion)){
     return;
   }
   if(this.listaUbicacion.includes("a")){
     this.listaUbicacion.splice(0,1)
     console.log(this.listaUbicacion)
   }
   console.log(this.listaUbicacion)
   this.listaUbicacion.push(ubicacion)
 }


}