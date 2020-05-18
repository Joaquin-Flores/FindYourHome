import { Component, OnInit } from '@angular/core';
import { Publicador } from '../model/publicador';
import { PublicadorService } from '../publicador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-publicador',
  templateUrl: './create-publicador.component.html',
  styleUrls: ['./create-publicador.component.css']
})
export class CreatePublicadorComponent implements OnInit {

  publicador: Publicador = new Publicador();

  constructor(private publicadorServicio: PublicadorService, private router: Router) { }
  
  ngOnInit(): void {
  }

  save(){
    console.log("Click");
    console.log(this.publicador);
    this.publicadorServicio.createPublicador(this.publicador).subscribe(
      data => this.router.navigate(['/listPublicador'])
    );
  }
}
