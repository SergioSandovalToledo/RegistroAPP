import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    CabeceraComponent,
    PiepaginaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    PiepaginaComponent
  ]
})
export class ComponentsModule { }
