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
    return this.http.post(this.urlBase + '/registrarvivienda/1', vivienda, {headers:this.httpHeaders});
  }


  getViviendaList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/viviendas")
    return this.http.get(this.urlBase+"/viviendas").pipe(
      map(response => response as Vivienda[])
    );
  }
  
  eliminarVivienda(codigo:number): Observable<any>{
    console.log(codigo)
    return this.http.delete(this.urlBase+"/eliminarvivienda/" + codigo).pipe(
      map(response => response as Vivienda)
    );
  }
  
  get = {
    event: (eventId: any): Promise<any[]> => {
      return this.http.get<File[]>(this.urlBase + '/obtenerimagenplano/' + eventId).pipe(map( 
        res => {return res}
        
      )).toPromise();
    }
  }

  getDiseno = {
    event: (eventId: any): Promise<any[]> => {
      return this.http.get<File[]>(this.urlBase + '/obtenerimagendiseno/' + eventId).pipe(map( 
        res => {return res}
        
      )).toPromise();
    }
  }

 
  getImagen(eventId: any): Observable<any>{
    return this.http.get<File>(this.urlBase + '/obtenerprimerimagen/' + eventId).pipe(map( 
      res => res as File
    ));
  }
  
  
  filtrarVivienda (ubicacion: String): Observable<any>{
    return this.http.get(this.urlBase+"/filtrarVivienda/" + ubicacion).pipe(
      map(response =>response as Vivienda[])
    );
  } 
}
