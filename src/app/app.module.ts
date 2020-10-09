import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    ListaProfessoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
