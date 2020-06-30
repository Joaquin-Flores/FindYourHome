import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadeseoService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  crearListaDeseo(CCliente:number, CVivienda:number, listaDeseo: Object): Observable<object>{
    return this.http.post(this.urlBase + '/registrarlistadeseocliente/' + CCliente + "/"+CVivienda, listaDeseo, {headers:this.httpHeaders});
  }

  

}
