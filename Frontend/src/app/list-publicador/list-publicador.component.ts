import { Component, OnInit } from '@angular/core';
import { Publicador } from '../model/publicador';
import { PublicadorService } from '../publicador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-publicador',
  templateUrl: './list-publicador.component.html',
  styleUrls: ['./list-publicador.component.css']
})
export class ListPublicadorComponent implements OnInit {

  publicadores: Observable<Publicador[]>

  constructor(private publicadorService: PublicadorService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    console.log("llamando al servicio");
    this.publicadorService.getPublicadorList().subscribe(
      publicadores => this.publicadores = publicadores
    )
  }

}
