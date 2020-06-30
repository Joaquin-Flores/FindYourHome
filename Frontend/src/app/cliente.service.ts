import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cliente } from './model/cliente';
import { Vivienda } from './model/vivienda';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getCliente(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/cliente/" + id).pipe(
      map(response => response as Cliente)
    );  
  }

  createCliente(cliente: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarcliente', cliente, {headers:this.httpHeaders});
  }

  createFavorito(cliente: object, CVivienda): Observable<any>{
    return this.http.put(this.urlBase + '/registrarlistadeseocliente/'+ CVivienda , cliente, {headers:this.httpHeaders});
  }

  getClienteList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/clientes")
    return this.http.get(this.urlBase+"/clientes").pipe(
      map(response => response as Cliente[])
    );
  }

  
  getViviendaContacto(codigo:number): Observable<any>{
    return this.http.get(this.urlBase + "/clientevivienda/" + codigo).pipe(
      map(response => response as Vivienda[])
    );  
  }
  
  registrarEstilo(estilo: Object): Observable<any>{
    return this.http.post(this.urlBase+"/registrarestilo/3", estilo, {headers:this.httpHeaders})
  }

  registrarColor(color: Object): Observable<any>{
    return this.http.post(this.urlBase+"/registrarcolor/3", color, {headers:this.httpHeaders})
  }
  actualizarCliente(cliente: Object): Observable<any>{
    return this.http.put(this.urlBase+'/actualizarcliente/1',cliente,{headers:this.httpHeaders})
  }

}
