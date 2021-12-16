import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

seleccionado1:Personaje={
      nombre:"",
      apellidos:"",
      edat:"",
      foto:"",
      descripcion:"",
      correo:"",
      contrasena:"",
      confcontrasena:""
    };
    route: ActivatedRoute;
    router:Router;
  
    constructor(route:ActivatedRoute, router:Router) { 
      this.route=route;
      this.router=router;
  
    }
  ngOnInit(): void {
    this.seleccionado1={
      nombre:String (this.route.snapshot.paramMap.get('nombre')),
      apellidos:String (this.route.snapshot.paramMap.get('apellidos')),
      edat:String (this.route.snapshot.paramMap.get('edat')),
      foto:String (this.route.snapshot.paramMap.get('foto')),
      descripcion:String (this.route.snapshot.paramMap.get('descripcion')),
      correo:String (this.route.snapshot.paramMap.get('correo')),
      contrasena:String (this.route.snapshot.paramMap.get('contrasena')),
      confcontrasena:String (this.route.snapshot.paramMap.get('confcontrasena'))
    }


  }

  volverlista(){

    this.router.navigate(['lista']);

  }
}
