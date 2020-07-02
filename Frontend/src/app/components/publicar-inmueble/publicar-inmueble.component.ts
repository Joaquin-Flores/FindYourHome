import { Component, OnInit } from '@angular/core';
import { Vivienda } from 'src/app/model/vivienda';
import { ViviendaService } from 'src/app/vivienda.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Mapboxgl from 'mapbox-gl';
import { PublicadorService } from 'src/app/publicador.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-publicar-inmueble',
  templateUrl: './publicar-inmueble.component.html',
  styleUrls: ['./publicar-inmueble.component.css']
})
export class PublicarInmuebleComponent implements OnInit {

  usuario:Usuario;
  vivienda: Vivienda = new Vivienda();
  latitud: any={};
  longitud: any={};
  lat1: number=-12.1139569;
  lon1: number=-77.0053;
  coorde:any={};
  mapa: Mapboxgl.Map; 
  map_general: Mapboxgl.Map; 
  marker: Mapboxgl.Marker;

  constructor(private viviendaServicio: ViviendaService, private publicadorServicio: PublicadorService, private router: Router,private http: HttpClient,
    public authService:AuthService) { }
  
  getO(direcccion:String,numero:String, distrito:String,ciudad:String){
    return this.publicadorServicio.getJson('https://maps.googleapis.com/maps/api/geocode/json?address='
    +direcccion+numero+distrito+ciudad+'&key=AIzaSyBigtXRIe8TfStJYbeijp-yRX6f7wpzrOE').subscribe(res=> { 
    if (res==Array(0)){
      this.latitud="";
      this.longitud="";
    }
    else{
      this.latitud=res;
      this.longitud=res;
    }
    this.coorde=res;
    console.log(res);
    console.log(this.latitud.results[0].geometry.location.lat); 
    console.log(this.longitud.results[0].geometry.location.lng); 
    this.lon1=this.longitud.results[0].geometry.location.lng;
    this.lat1=this.latitud.results[0].geometry.location.lat;
  
    this.ngOnInit();
    });
    
    }
    
  ngOnInit(): void {
    this.usuario = this.authService.usuario;
    Mapboxgl.accessToken = environment.mapboxKey; 
    this.mapa = new Mapboxgl.Map({
    container: 'mapa2-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.lon1,this.lat1], // starting position  //LNG,LAT
    zoom: 16 // starting zoom
    });

    this.marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([this.lon1, this.lat1]).addTo(this.mapa);
      
      this.marker.on('drag',()=> {
      console.log(this.marker.getLngLat())
      });

		this.mapa.addControl(new Mapboxgl.NavigationControl(),"top-left");
   
  }  
  
  
  crearMarcador(lng:number, lat:number){
    var marker = new Mapboxgl.Marker({container: 'marcador', draggable: true}).setLngLat([lng, lat]).addTo(this.mapa);
    marker.on('drag',()=> { console.log(marker.getLngLat()) })
    
    }

  registrarInmueble(){
    this.viviendaServicio.createVivienda(this.vivienda, this.usuario.publicador.codigo).subscribe(
      data => this.router.navigate(['/registroEntidades/viviendapublicador'])
    );
  }

}
