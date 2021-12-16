import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numeroComponentePadre: number = 10;

 
  actualizarNumero(numero:number){

    this.numeroComponentePadre =numero;


  }


}
