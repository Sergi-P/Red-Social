import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  route: ActivatedRoute;
  router:Router;

  constructor(route:ActivatedRoute, router:Router) { 
    this.route=route;
    this.router=router;
    this.personajes = JSON.parse(localStorage.getItem('listado') || '[]');
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


  ngOnInit(): void {
    this.personaje={
      nombre:String (this.route.snapshot.paramMap.get('nombre')),
      apellidos:String (this.route.snapshot.paramMap.get('apellidos')),
      edat:Number (this.route.snapshot.paramMap.get('edat')),
      foto:String (this.route.snapshot.paramMap.get('foto')),
      descripcion:String (this.route.snapshot.paramMap.get('descripcion')),
      correo:String (this.route.snapshot.paramMap.get('correo')),
      contrasena:String (this.route.snapshot.paramMap.get('contrasena')),
      confcontrasena:String (this.route.snapshot.paramMap.get('confcontrasena'))
    }
    if(this.personaje.nombre.trim().length ===0){
      return;
    }
    if(this.personaje.nombre != "null"){
      this.personajes.push(this.personaje);
      localStorage.setItem('listado', JSON.stringify(this.personajes));
      this.router.navigate(['lista']);
      

    } 
       
  }
personajes:Personaje[]=[];

  seleccionado:Personaje={
    nombre:"",
    apellidos:"",
    edat:0,
    foto:"",
    descripcion:"",
    correo:"",
    contrasena:"",
    confcontrasena:""
  };

  seleccionarUsu(Usu:Personaje){
    this.seleccionado.nombre=Usu.nombre;
    this.seleccionado.apellidos=Usu.apellidos;
    this.seleccionado.edat=Usu.edat;
    this.seleccionado.foto=Usu.foto;
    this.seleccionado.descripcion=Usu.descripcion;
    this.seleccionado.correo=Usu.correo;
    this.seleccionado.contrasena=Usu.contrasena;
    this.seleccionado.confcontrasena=Usu.confcontrasena;
    
  this.router.navigate(['detalles', Usu ]);
  }
 
}
