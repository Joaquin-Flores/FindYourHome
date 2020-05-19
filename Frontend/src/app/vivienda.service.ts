import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Vivienda } from './model/vivienda';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getVivienda(id:number):Observable<any>{
    return this.http.get(this.urlBase + "/vivienda/" + id).pipe(
      map(response => response as Vivienda)
    );
  }

  createVivienda(vivienda: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarvivienda', vivienda, {headers:this.httpHeaders});
  }

  getViviendaList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/viviendas")
    return this.http.get(this.urlBase+"/viviendas").pipe(
      map(response => response as Vivienda[])
    );
  }

  filtrarVivienda (ubicacion: String): Observable<any>{
    return this.http.get(this.urlBase+"/filtrarVivienda/" + ubicacion).pipe(
      map(response =>response as Vivienda[])
    );
  } 
}
