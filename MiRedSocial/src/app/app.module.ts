import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ContadorModule } from "./contador/contador.module";
import { AgregarComponent } from './dbz/agregar/agregar.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';

 import { MRSModule } from "./dbz/MiRedSocial.module";
import { PersonajesComponent } from './dbz/Usuarios/personajes.component';



const routes:Routes=[
  {
    path:'', 
    component: MainPageComponent
  },
  {
    path:'agregar',
    component: AgregarComponent
  },
  {
    path:'lista',
    component: PersonajesComponent
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    ContadorModule,
    MRSModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
