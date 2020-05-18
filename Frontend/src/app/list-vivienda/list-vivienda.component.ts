import { Component, OnInit } from '@angular/core';
import { Vivienda } from '../model/vivienda';
import { Observable } from 'rxjs';
import { ViviendaService } from '../vivienda.service';

@Component({
  selector: 'app-list-vivienda',
  templateUrl: './list-vivienda.component.html',
  styleUrls: ['./list-vivienda.component.css']
})
export class ListViviendaComponent implements OnInit {

  viviendas: Observable<Vivienda[]>

  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    console.log("llamando al servicio");
    this.viviendaService.getViviendaList().subscribe(
      viviendas => this.viviendas = viviendas
    )
  }
}
