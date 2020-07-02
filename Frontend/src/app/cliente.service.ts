import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Cliente } from './model/cliente';
import { Vivienda } from './model/vivienda';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Listadeseo } from './model/listadeseo';
import { Color } from './model/color';
import { Estilo } from './model/estilo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
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
  getCliente(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/cliente/" + id).pipe(
      map(response => response as Cliente)
    );  
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
  createCliente(cliente: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarcliente', cliente, {headers:this.httpHeaders});
  }

  createFavorito(CLiente, CVivienda, listaDeseo): Observable<any>{
    return this.http.post(this.urlBase + '/registrarlistadeseocliente/'+CLiente+"/" +CVivienda , listaDeseo, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Listadeseo),
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

  getClienteList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/clientes")
    return this.http.get(this.urlBase+"/clientes").pipe(
      map(response => response as Cliente[])
    );
  }
  getViviendaContacto(codigo:number): Observable<any>{
    return this.http.get(this.urlBase + "/clientevivienda/" + codigo, {headers: this.agregarAuthorizationHeader()}).pipe(
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
  registrarEstilo(estilo: Object, codigo): Observable<any>{
    return this.http.post(this.urlBase+"/registrarestilo/" + codigo, estilo, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Estilo),
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
  registrarColor(color: Object, codigo): Observable<any>{
    return this.http.post(this.urlBase+"/registrarcolor/" + codigo, color, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Color),
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
  actualizarCliente(cliente: Object, codigo): Observable<any>{
    return this.http.put(this.urlBase+'/actualizarcliente/' + codigo,cliente, {headers: this.agregarAuthorizationHeader()}).pipe(
      map((response: any) => response as Cliente),
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
