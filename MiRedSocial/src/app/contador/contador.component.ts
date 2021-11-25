
import { Component } from "@angular/core";

@Component({
    selector: 'contador-component',
    templateUrl:'contador.component.html',

})
export class ContadorComponent{
 title:string = 'Contador app';
  numero:number = 0;
  

  base:number=5;

  calcular(numero:number){
    this.numero+=numero;
  }
}