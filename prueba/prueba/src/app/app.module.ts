import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijo1Component } from './componente-hijo1/componente-hijo1.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteHijo1Component,
    ComponenteHijo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
