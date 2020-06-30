import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  loginCliente(cliente: object): Observable<object>{
    return this.http.post(this.urlBase + '/logincliente', cliente, {headers:this.httpHeaders});
  }

  loginPublicador(publicador: Object): Observable<object>{
    return this.http.post(this.urlBase + '/loginpublicador', publicador, {headers:this.httpHeaders});
  }
}
