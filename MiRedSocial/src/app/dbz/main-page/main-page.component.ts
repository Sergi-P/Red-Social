import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  route: ActivatedRoute;
  router:Router;

  constructor(route:ActivatedRoute, router:Router) { 
    this.route=route;
    this.router=router;

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
 


personajes:Personaje[]=[];





}

