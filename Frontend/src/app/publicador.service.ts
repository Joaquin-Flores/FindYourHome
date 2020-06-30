import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators'
import { Publicador } from './model/publicador';
import { Vivienda } from './model/vivienda';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PublicadorService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }


  getJson (url: string){
    return  this.http.get(url) ;
  }

  getPublicador(id:number):Observable<any>{
    return this.http.get('${this.baseUrl}/${id}')
  }

  createPublicador(publicador: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarpublicador', publicador, {headers:this.httpHeaders});
  }

  getViviendaList():Observable<any>{
    return this.http.get(this.urlBase+"/viviendapublicador/1").pipe(
      map(response => response as Vivienda[])
    );
  }

  getPublicadorList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/publicadores")
    return this.http.get(this.urlBase+"/publicadores").pipe(
      map(response => response as Publicador[])
    );
  }
  obtenerDirecciones(){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=283+Gabriela+Mistral+Surquillo&key=AIzaSyBigtXRIe8TfStJYbeijp-yRX6f7wpzrOE');
  }
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

  getPublicadorByVivienda(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/publicadorvivienda/" + id).pipe(
      map(response => response as Publicador)
    );
  }

  //FALTA CAMBIAR A LISTA DE VIVIENDAS MANY TO ONE CON CONTACTO
  getViviendaByPublicador(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/viviendabypublicador/" + id).pipe(
      map(response => response as Vivienda[])
    );
  }
  getViviendaLista(codigo:number):Observable<any>{
    return this.http.get(this.urlBase+"/viviendapublicador/" + codigo).pipe(
      map(response => response as Vivienda[])
    );
  }

}
