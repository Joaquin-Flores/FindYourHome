import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PublicadorService } from 'src/app/publicador.service';
import { HttpClient} from '@angular/common/http';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Vivienda } from 'src/app/model/vivienda';
import { Observable } from 'rxjs';
import { ViviendaService } from 'src/app/vivienda.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  viviendas: Vivienda[];
  title = 'TrabajoWeb';
  latitud: any={};
  longitud: any={};
  lat1: number=-12.1139569;
  lon1: number=-77.0053;
  address: "";
  coorde:any={};
  mapa: Mapboxgl.Map; 
  marker: Mapboxgl.Marker;
 
  
  constructor( private publicadorServicio: PublicadorService, private router: Router,private http: HttpClient){
  } 
  viviendaPublicadorList(): any{
    return this.publicadorServicio.getViviendaList().subscribe(
      data => {
        this.viviendas = data
        this.registrarMarcadores();
      }
    );
  }
  ngOnInit(){
    Mapboxgl.accessToken = environment.mapboxKey; 
    this.mapa = new Mapboxgl.Map({
    container: 'mapa3-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.lon1,this.lat1], // starting position  //LNG,LAT
    zoom: 10 // starting zoom
    });    
    var nav = new Mapboxgl.NavigationControl();
    this.mapa.addControl(nav,"top-left"); 
    this.viviendaPublicadorList();

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
  
  
  registrarMarcadores(){
   for (let index of this.viviendas){
      this.getO(index.ciudad,index.numero,index.distrito,index.direccion)
    }
  }

  crearMarcador(lng:number, lat:number){
    console.info("ENtro a crear marcador");
    var marker = new Mapboxgl.Marker({
      
      draggable: true
      })
      .setLngLat([lng, lat]).addTo(this.mapa);
      marker.on('drag',()=> {
      console.log(marker.getLngLat())
      })
    }
  isHomeRoute(){
    return this.router.url == '/home';
  }

}
