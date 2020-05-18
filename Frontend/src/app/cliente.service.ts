import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cliente } from './model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getCliente(id:number):Observable<object>{
    return this.http.get('${this.baseUrl}/${id}')
  }

  createCliente(cliente: object): Observable<Object>{
    console.log("Enviando rest create...")
    return this.http.post(this.urlBase + '/registrarcliente', cliente, {headers:this.httpHeaders});
  }

  getClienteList(): Observable<any>{
    console.log("llamanado rest: " + this.urlBase + "/clientes")
    return this.http.get(this.urlBase+"/clientes").pipe(
      map(response => response as Cliente[])
    );
  }
}
