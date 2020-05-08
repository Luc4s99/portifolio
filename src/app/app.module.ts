import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorpoComponent } from './corpo/corpo.component';
import { ContatoComponent } from './contato/contato.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ExperienciaComponent } from './experiencias/experiencia/experiencia.component';
import { Experiencia2Component } from './experiencias/experiencia2/experiencia2.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CorpoComponent,
    ContatoComponent,
    ExperienciasComponent,
    ExperienciasComponent,
    ExperienciaComponent,
    Experiencia2Component,
    FormacaoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
