import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './Usuarios/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { AdministradorComponent } from './administrador/administrador.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
    DetallesComponent,
    AdministradorComponent
    
  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
     FormsModule,
     RouterModule
  ]
})
export class MRSModule { }
