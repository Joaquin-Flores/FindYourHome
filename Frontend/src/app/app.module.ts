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
import { RegistroEntidadesComponent } from './components/registro-entidades/registro-entidades.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { RegistroExitosoComponent } from './registro-exitoso/registro-exitoso.component';
import { TipoPublicadorComponent } from './components/tipo-publicador/tipo-publicador.component';
import { PublicarInmuebleComponent } from './components/publicar-inmueble/publicar-inmueble.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { ViviendaPublicadorComponent } from './components/vivienda-publicador/vivienda-publicador.component'
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ImagenViviendaComponent } from './components/imagen-vivienda/imagen-vivienda.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ActualizarViviendaComponent } from './actualizar-vivienda/actualizar-vivienda.component';

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
    RegistroEntidadesComponent,
    EncuestaComponent,
    RegistroExitosoComponent,
    TipoPublicadorComponent,
    PublicarInmuebleComponent,
    SubirImagenComponent,
    ViviendaPublicadorComponent,
    ImagenViviendaComponent,
    ActualizarClienteComponent,
    ActualizarViviendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-PE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
