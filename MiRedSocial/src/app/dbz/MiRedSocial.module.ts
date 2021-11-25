import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './Usuarios/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
    
  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
     FormsModule,
     RouterModule
  ]
})
export class MRSModule { }
