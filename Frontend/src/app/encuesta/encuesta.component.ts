import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {


  
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  isEncuestaRoute(){
    return this.router.url == '/encuesta';
  }
  

}
