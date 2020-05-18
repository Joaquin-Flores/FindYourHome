import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { CreatePublicadorComponent } from './create-publicador/create-publicador.component';
import { CreateViviendaComponent } from './create-vivienda/create-vivienda.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ListPublicadorComponent } from './list-publicador/list-publicador.component';
import { ListViviendaComponent } from './list-vivienda/list-vivienda.component';
import { ShowClienteComponent } from './show-cliente/show-cliente.component';
import { ShowPublicadorComponent } from './show-publicador/show-publicador.component';
import { ShowViviendaComponent } from './show-vivienda/show-vivienda.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { FiltrarViviendaComponent } from './filtrar-vivienda/filtrar-vivienda.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEntidadesComponent } from './components/lista-entidades/lista-entidades.component';
import { RegistroEntidadesComponent } from './components/registro-entidades/registro-entidades.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    CreatePublicadorComponent,
    CreateViviendaComponent,
    ListClienteComponent,
    ListPublicadorComponent,
    ListViviendaComponent,
    ShowClienteComponent,
    ShowPublicadorComponent,
    ShowViviendaComponent,
    FiltrarViviendaComponent,
    HomeComponent,
    ListaEntidadesComponent,
    RegistroEntidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
