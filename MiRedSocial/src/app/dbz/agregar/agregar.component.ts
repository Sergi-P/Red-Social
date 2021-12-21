import { Component, OnInit} from '@angular/core';

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
    edat:0,
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
    else if(this.personaje.apellidos.trim().length ===0){
      return;
    }
    else if(this.personaje.edat===0){
      return;
    }
    else if(this.personaje.foto.trim().length ===0){
      return;
    }
    else if(this.personaje.descripcion.trim().length ===0){
      return;
    }
    else if(this.personaje.correo.trim().length ===0){
      return;
    }
    else if(this.personaje.contrasena.trim().length ===0){
      return;
    }
    else if(this.personaje.confcontrasena.trim().length ===0){
      return;
    }
    else if(this.personaje.confcontrasena!=this.personaje.contrasena){
      return;
    }
    else if(this.personaje.descripcion.trim().length<4){
      return;
    }
  










  this.router.navigate(['lista', this.personaje ]);


  this.personaje={
    nombre:"",
    apellidos:"",
    edat:0,
    foto:"",
    descripcion:"",
    correo:"",
    contrasena:"",
    confcontrasena:""
  }

  }
}
