import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Vivienda } from './model/vivienda';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {
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

  getVivienda(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/vivienda/" + id, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda),
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

  createVivienda(vivienda: Vivienda, codigoPublicador:number): Observable<Vivienda>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarvivienda/' + codigoPublicador, vivienda, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda),
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


  getViviendaList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/viviendas")
    return this.http.get(this.urlBase+"/viviendas" , {headers: this.agregarAuthorizationHeader()}).pipe(
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
  
  eliminarVivienda(codigo:number): Observable<any>{
    console.log(codigo)
    return this.http.delete(this.urlBase+"/eliminarvivienda/" + codigo, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda),
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
  
  get = {
    event: (eventId: any): Promise<any[]> => {
      return this.http.get<any[]>(this.urlBase + '/obtenerimagenplano/' + eventId, {headers: this.agregarAuthorizationHeader()}).pipe(
        map((response: any) => response as any),
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
      ).toPromise();
    }
  }

  getDiseno = {
    event: (eventId: any): Promise<any[]> => {
      return this.http.get<any[]>(this.urlBase + '/obtenerimagendiseno/' + eventId, {headers: this.agregarAuthorizationHeader()}).pipe(
        map((response: any) => response as any),
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
      ).toPromise();
    }
  }

 
  getImagen(eventId: any): Observable<any>{
    return this.http.get<any>(this.urlBase + '/obtenerprimerimagen/' + eventId, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as any),
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
  
  filtrarVivienda (ubicacion: String): Observable<any>{
    return this.http.get(this.urlBase+"/filtrarVivienda/" + ubicacion).pipe(
      map(response =>response as Vivienda[])
    );
  } 
  actualizarVivienda(vivienda: Object, codigo): Observable<any>{
    return this.http.put(this.urlBase+'/actualizarvivienda/' + codigo,vivienda, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Vivienda),
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
  filtradoGeneral(ubicacion: String[], pmin: number, pmax:number, numHabitacion: number, numBano:number): Observable<any>{
    return this.http.get(this.urlBase + "/filtradogeneral/" +ubicacion + "/" + pmin + "/"+ pmax + "/" + numHabitacion + "/" + numBano , {headers: this.agregarAuthorizationHeader()}).pipe(
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
}
