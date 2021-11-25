import { Component, Input, OnInit } from '@angular/core';
import { UnsubscriptionError } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  seleccionado:Personaje={
    nombre:"",
    apellidos:"",
    edat:"",
    foto:"",
    descripcion:"",
    correo:"",
    contrasena:"",
    confcontrasena:""
  };


  @Input() personajesCompHijo:Personaje[]=[];


  seleccionarUsu(Usu:Personaje){
    this.seleccionado.nombre=Usu.nombre;
    this.seleccionado.apellidos=Usu.apellidos;
    this.seleccionado.edat=Usu.edat;
    this.seleccionado.foto=Usu.foto;
    this.seleccionado.descripcion=Usu.descripcion;
    this.seleccionado.correo=Usu.correo;
    this.seleccionado.contrasena=Usu.contrasena;
    this.seleccionado.confcontrasena=Usu.confcontrasena;
  }
 
}
