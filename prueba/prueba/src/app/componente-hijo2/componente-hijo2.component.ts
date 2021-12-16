import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo2',
  templateUrl: './componente-hijo2.component.html',
  styleUrls: ['./componente-hijo2.component.css']
})
export class ComponenteHijo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() numeroComponenteHijo2:number=0;


  @Output() onClickActualizar:EventEmitter<number>= new EventEmitter();

  actualizarNumero(){

    this.numeroComponenteHijo2 +=1

    this.onClickActualizar.emit(this.numeroComponenteHijo2);

  }
}
