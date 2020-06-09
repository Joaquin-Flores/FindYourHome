import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViviendaService } from 'src/app/vivienda.service';


declare const $:any;

@Component({
  selector: 'app-imagen-vivienda',
  templateUrl: './imagen-vivienda.component.html',
  styleUrls: ['./imagen-vivienda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ImagenViviendaComponent implements OnInit {

  codigoVivienda:number;

  retrievedImage:any[]= [];
  base64Data: any[]= [];
  listaPlano: any[] = [];

  retrievedImageDiseno:any[]= [];
  base64DataDiseno: any[]= [];
  listaDiseno: any[] = [];

  cargo: Boolean = false;
  cargo2: Boolean = false;


  

  constructor(private dataRoute: ActivatedRoute, private viviendaService :ViviendaService) { 
    this.codigoVivienda = parseInt(this.dataRoute.snapshot.paramMap.get('id'))
  }


  ngOnInit(): void {
    this.fetchEvent().then(() => {this.cargo = true; console.log(this.cargo)});
    this.fetchEventDiseno().then(() => {this.cargo2 = true; console.log(this.cargo2)});
    
    setTimeout(() => {
      this.divClick.nativeElement.click();
    }, 200);
    //console.log(this.base64Data);
  }

  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  }

  ngAfterViewInit2(){
    $('#carouselExampleCaptions2').carousel()
  }

  fetchEvent(){
    return this.viviendaService.get.event(this.codigoVivienda).then(event => {
        this.listaPlano = event;
        console.log(this.listaPlano);
        
        for(let i = 0; i < this.listaPlano.length; i++){
          this.base64Data[i] = this.listaPlano[i].picByte;
          this.retrievedImage[i] = 'data:image/jpeg;base64,' + this.base64Data[i];
        }
    });
 }
 
 fetchEventDiseno(){
  return this.viviendaService.getDiseno.event(this.codigoVivienda).then(event => {
      this.listaDiseno = event;
      console.log(this.listaDiseno);
      
      for(let i = 0; i < this.listaDiseno.length; i++){
        this.base64DataDiseno[i] = this.listaDiseno[i].picByte;
        this.retrievedImageDiseno[i] = 'data:image/jpeg;base64,' + this.base64DataDiseno[i];
        console.log(this.retrievedImage[i])
      }
  });
}

 @ViewChild('divClick') divClick: ElementRef;

 getUrl()
  {
    //console.log(this.retrievedImage[0]);
    console.log(this.listaPlano.length);
    //return this.listaPlano.length > 0;
    console.log(this.cargo);
  }

}
