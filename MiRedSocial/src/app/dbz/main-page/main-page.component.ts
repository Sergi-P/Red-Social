import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  usuario:Personaje={
    nombre:"",
    apellidos:"",
    contrasena:"",
    confcontrasena:"",
    correo:"",
    edat:"",
    foto:"",
    descripcion:""
}

  u1:Personaje={
    nombre:"David",
    apellidos:"Blanco",
    contrasena:"123",
    confcontrasena:"123",
    correo:"davidblanco@gmail.com",
    edat:"19",
    foto:"",
    descripcion:""
  }
  u2:Personaje={
    nombre:"Dani",
    apellidos:"Romero",
    contrasena:"123",
    confcontrasena:"123",
    correo:"daniromero@gmail.com",
    edat:"19",
    foto:"",
    descripcion:""
  }
  u4:Personaje={
    nombre:"Eric",
    apellidos:"Farre",
    contrasena:"123",
    confcontrasena:"123",
    correo:"ericfarre@gmail.com",
    edat:"18",
    foto:"",
    descripcion:""
  }
  u3:Personaje={
    nombre:"Sergi",
    apellidos:"Pifarré",
    contrasena:"123",
    confcontrasena:"123",
    correo:"sergipifarre@gmail.com",
    edat:"18",
    foto:"",
    descripcion:""
   
  }
personajes:Personaje[]=[this.u1,this.u2,this.u3,this.u4];


anadirPersonaje(data:Personaje){
  this.personajes.push(data);
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
eliminarUsu(Usu2:Personaje){
  for (let i = 0; i < this.personajes.length; i++) {
    if(Usu2.correo==this.personajes[i].correo ){
      this.personajes.splice(i, 1);
  }
  
  }
 
}




}

