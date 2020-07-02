import { Component, OnInit } from '@angular/core';
import {  Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-vivienda',
  templateUrl: './actualizar-vivienda.component.html',
  styleUrls: ['./actualizar-vivienda.component.css']
})
export class ActualizarViviendaComponent implements OnInit {
  vivienda:Vivienda= new Vivienda();
  codigoVivienda: any;
  constructor(private viviendaServicio: ViviendaService, private router: Router,private dataRoute: ActivatedRoute) { 
    this.codigoVivienda = parseInt(this.dataRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }
  actualizarVivienda(){
    console.log("Click");
    console.log(this.vivienda);
    this.viviendaServicio.actualizarVivienda(this.vivienda, this.codigoVivienda).subscribe(
      data => console.log(data)
    );
  }
}
