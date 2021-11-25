import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input() personajesComponenteAgregar: Personaje[]=[];
  
  
  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

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
  this.personajesComponenteAgregar.push(this.personaje);
  
  
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
