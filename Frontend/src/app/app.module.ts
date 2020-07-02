import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
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
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { AuspiciadorComponent } from './auspiciador/auspiciador.component';
import { PrincipalComponent } from './principal/principal.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { DatePipe } from '@angular/common';
import { FavoritosComponent } from './usuario/favoritos/favoritos.component';
import { ComprasComponent } from './usuario/compras/compras.component';
import { ConfigurarComponent } from './usuario/configurar/configurar.component';
import { VentasComponent } from './publicador/ventas/ventas.component';
import { ReputacionComponent } from './publicador/reputacion/reputacion.component';
import { HistorialComponent } from './publicador/historial/historial.component';
import { ConfigurarPublicadorComponent } from './publicador/configurar-publicador/configurar-publicador.component';
import { PerfilpublicadorComponent } from './components/perfil-publicador/perfil-publicador.component';
import { PerfilusuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';
import { LoginPublicadorComponent } from './login-publicador/login-publicador.component';
import { EleccionCompradorComponent } from './eleccion-comprador/eleccion-comprador.component';
import { EleccionPublicadorComponent } from './eleccion-publicador/eleccion-publicador.component';
import { ActualizarPublicadorComponent } from './actualizar-publicador/actualizar-publicador.component';
import { CreateAuspiciadorComponent } from './create-auspiciador/create-auspiciador.component';



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
    ActualizarViviendaComponent,
    UsuariosComponent,
    PaginatorComponent,
    DirectivaComponent,
    AuspiciadorComponent,
    PrincipalComponent,
    EleccionComponent,
    FavoritosComponent,
    ComprasComponent,
    ConfigurarComponent,
    VentasComponent,
    ReputacionComponent,
    HistorialComponent,
    ConfigurarPublicadorComponent,
    PerfilpublicadorComponent,
    PerfilusuarioComponent,
    LoginCompradorComponent,
    LoginPublicadorComponent,
    EleccionCompradorComponent,
    EleccionPublicadorComponent,
    ActualizarPublicadorComponent,
    CreateAuspiciadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBigtXRIe8TfStJYbeijp-yRX6f7wpzrOE'
    })
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-PE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
