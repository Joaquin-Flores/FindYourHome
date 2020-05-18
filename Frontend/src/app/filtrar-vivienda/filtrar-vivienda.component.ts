import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';

@Component({
  selector: 'app-filtrar-vivienda',
  templateUrl: './filtrar-vivienda.component.html',
  styleUrls: ['./filtrar-vivienda.component.css']
})
export class FiltrarViviendaComponent implements OnInit {

  viviendas: Observable<Vivienda[]>
  ubicacion: "";

  constructor(private viviendaServicio: ViviendaService) { }

  ngOnInit(): void {
    this.filtrarVivienda();
  }

  filtrarVivienda(){
    this.viviendaServicio.filtrarVivienda(this.ubicacion).subscribe(
      viviendas => this.viviendas = viviendas
    );
  }
}
