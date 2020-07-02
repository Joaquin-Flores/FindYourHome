import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Publicador } from './model/publicador';
import { Vivienda } from './model/vivienda';
import 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PublicadorService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient, public authService: AuthService,private router: Router) { }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/eleccion']);
      return true;
    }

    if (e.status == 403) {
      Swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  actualizarPublicador(publicador: Object): Observable<any>{
    return this.http.put(this.urlBase+'/actualizarpublicador/1',publicador,{headers:this.httpHeaders})
  }
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

  getViviendaList(codigo:number):Observable<any>{
    return this.http.get(this.urlBase+"/viviendapublicador/" + codigo, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda[]),
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }

          if (e.status == 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
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
    return this.http.get(this.urlBase + "/publicadorvivienda/" + id, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Publicador),
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }

          if (e.status == 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
    );  
  }
  //FALTA CAMBIAR A LISTA DE VIVIENDAS MANY TO ONE CON CONTACTO
  getViviendaByPublicador(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/viviendabypublicador/" + id, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda[]),
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }

          if (e.status == 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
    );  
  }
  getViviendaLista(codigo:number):Observable<any>{
    return this.http.get(this.urlBase+"/viviendapublicador/" + codigo).pipe(
      map(response => response as Vivienda[])
    );
  }

}
