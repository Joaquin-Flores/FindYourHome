import { Component, OnInit } from '@angular/core';
import {  Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-vivienda',
  templateUrl: './actualizar-vivienda.component.html',
  styleUrls: ['./actualizar-vivienda.component.css']
})
export class ActualizarViviendaComponent implements OnInit {
  vivienda:Vivienda= new Vivienda();
  constructor(private viviendaServicio: ViviendaService, private router: Router) { }

  ngOnInit(): void {
  }
  actualizarVivienda(){
    console.log("Click");
    console.log(this.vivienda);
    this.viviendaServicio.actualizarVivienda(this.vivienda).subscribe(
      data => console.log(data)
    );
  }

}
