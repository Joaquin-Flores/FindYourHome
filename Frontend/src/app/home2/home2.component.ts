import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Publicador } from '../model/publicador';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  msg = ' '
  cliente: Cliente;
  username:string;
  contrasena:string;
  e: String;
  codCliente:number;
  loginDone:boolean = false;


  constructor(private router:Router, private serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

  loginCliente(){
    this.msg = ' '
    this.serviceLogin.loginCliente(this.username, this.contrasena).subscribe(data => {
      console.log(data)
      this.e = JSON.stringify(data);
      this.codCliente = +this.e[10]
      this.loginDone = true;
    },
    err =>{
      console.log("mal")
      this.msg = "Correo o contraseña incorrecto, intente denuevo"
    },
    ()=>{
      console.log(this.cliente)
    });
  }

}
