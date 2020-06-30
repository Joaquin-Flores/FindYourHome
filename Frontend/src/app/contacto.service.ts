import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }

    nuevoContacto(contacto: object, codVivienda, codCliente): Observable<object>{
      return this.http.post(this.urlBase+'/registrarcontacto/' + codCliente +'/'+codVivienda,contacto,{headers:this.httpHeaders})
    }
}
