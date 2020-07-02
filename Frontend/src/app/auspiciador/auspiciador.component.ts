import { Component, OnInit } from '@angular/core';
import { Auspiciador } from '../model/auspiciador';
import { AuspiciadorService } from '../auspiciador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auspiciador',
  templateUrl: './auspiciador.component.html',
  styleUrls: ['./auspiciador.component.css']
})
export class AuspiciadorComponent implements OnInit {

  auspiciador: Auspiciador = new Auspiciador();
  logo1: String;

  constructor(private auspiciadorServicio: AuspiciadorService, private router: Router) { }
  
  ngOnInit(): void {
  }
   
  save(){
    console.log("Click");
    console.log(this.auspiciador);
    this.auspiciadorServicio.createAuspiciador(this.auspiciador).subscribe(
      data => this.router.navigate([])
    );
  }
  ver(logo1:String){
    this.logo1=logo1;
  }

  verification (){
    return true;
  }
    
}
