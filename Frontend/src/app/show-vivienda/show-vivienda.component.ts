import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';

@Component({
  selector: 'app-show-vivienda',
  templateUrl: './show-vivienda.component.html',
  styleUrls: ['./show-vivienda.component.css']
})
export class ShowViviendaComponent implements OnInit {

  vivienda: Observable<Vivienda>

  constructor(private servicioVivienda: ViviendaService) { }

  ngOnInit(): void {
  }


}
