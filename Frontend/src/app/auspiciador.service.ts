import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Auspiciador } from './model/auspiciador';


@Injectable({
  providedIn: 'root'
})
export class AuspiciadorService {
  private urlBase = "http://localhost:8888";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getCliente(id:number):Observable<object>{
    return this.http.get('${this.baseUrl}/${id}')
  }

  getAuspiciadorist():Observable<any>{
    return this.http.get(this.urlBase+"/listar").pipe(
      map(response => response as Auspiciador[])
    );
  }
  createCliente(cliente: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarAuspiciador', cliente, {headers:this.httpHeaders});
  }

  getClienteList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/clientes")
    return this.http.get(this.urlBase+"/clientes").pipe(
      map(response => response as Auspiciador[])
    );
  }


}
