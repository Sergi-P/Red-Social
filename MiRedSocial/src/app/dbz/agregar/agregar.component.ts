import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  route: ActivatedRoute;
  router:Router;

  constructor(route:ActivatedRoute, router:Router) { 
    this.route=route;
    this.router=router;

  }
  ngOnInit(): void {
  }

  personaje:Personaje={
    nombre:"",
    apellidos:"",
    edat:"",
    foto:"",
    descripcion:"",
    correo:"",
    contrasena:"",
    confcontrasena:""
  }
  anadirPersonaje(){
    if(this.personaje.nombre.trim().length ===0){
      return;
    }
  
  this.router.navigate(['lista', this.personaje ]);


  this.personaje={
    nombre:"",
    apellidos:"",
    edat:"",
    foto:"",
    descripcion:"",
    correo:"",
    contrasena:"",
    confcontrasena:""
  }

  }
}
