import { Component, OnInit } from '@angular/core';
import { Publicador } from 'src/app/model/publicador';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PublicadorService } from 'src/app/publicador.service';
@Component({
  selector: 'app-configurar-publicador',
  templateUrl: './configurar-publicador.component.html',
  styleUrls: ['./configurar-publicador.component.css']
})
export class ConfigurarPublicadorComponent implements OnInit {

  codigoPublicador: number;
  publicador: any={};

  constructor(private dataRoute: ActivatedRoute, private publicadorService: PublicadorService) { }

  ngOnInit(): void {
    this.codigoPublicador = parseInt(this.dataRoute.snapshot.paramMap.get('id'));
    this.publicadorService.getPublicador(this.codigoPublicador).subscribe(res => {
        this.publicador = res;
        console.log(this.publicador);
      });
  }

}
