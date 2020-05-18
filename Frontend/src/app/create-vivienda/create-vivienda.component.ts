import { Component, OnInit } from '@angular/core';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vivienda',
  templateUrl: './create-vivienda.component.html',
  styleUrls: ['./create-vivienda.component.css']
})
export class CreateViviendaComponent implements OnInit {

  vivienda: Vivienda = new Vivienda();

  constructor(private viviendaServicio: ViviendaService, private router: Router) { }
  
  ngOnInit(): void {
  }

  save(){
    console.log("Click");
    console.log(this.vivienda);
    this.viviendaServicio.createVivienda(this.vivienda).subscribe(
      data => this.router.navigate(['/listVivienda'])
    );
  }
}
