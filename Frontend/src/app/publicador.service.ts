import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Publicador } from './model/publicador';
import { Vivienda } from './model/vivienda';

@Injectable({
  providedIn: 'root'
})
export class PublicadorService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getPublicador(id:number):Observable<object>{
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
}
