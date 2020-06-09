import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ShowClienteComponent } from './show-cliente/show-cliente.component';
import { ListPublicadorComponent } from './list-publicador/list-publicador.component';
import { CreatePublicadorComponent } from './create-publicador/create-publicador.component';
import { ShowPublicadorComponent } from './show-publicador/show-publicador.component';
import { ListViviendaComponent } from './list-vivienda/list-vivienda.component';
import { ShowViviendaComponent } from './show-vivienda/show-vivienda.component';
import { CreateViviendaComponent } from './create-vivienda/create-vivienda.component';
import { FiltrarViviendaComponent } from './filtrar-vivienda/filtrar-vivienda.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEntidadesComponent } from './components/lista-entidades/lista-entidades.component';
import { RegistroEntidadesComponent } from './components/registro-entidades/registro-entidades.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { RegistroExitosoComponent } from './registro-exitoso/registro-exitoso.component';
import { TipoPublicadorComponent } from './components/tipo-publicador/tipo-publicador.component';
import { PublicarInmuebleComponent } from './components/publicar-inmueble/publicar-inmueble.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { ViviendaPublicadorComponent } from './components/vivienda-publicador/vivienda-publicador.component';
import { ImagenViviendaComponent } from './components/imagen-vivienda/imagen-vivienda.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
 import { ActualizarViviendaComponent } from './actualizar-vivienda/actualizar-vivienda.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listaEntidades', component: ListaEntidadesComponent},
  {path: 'registroEntidades', component: RegistroEntidadesComponent},
  {path: 'listaEntidades/listCliente', component: ListClienteComponent},
  {path: 'registroEntidades/newCliente', component: CreateClienteComponent},
  {path: 'showCliente', component: ShowClienteComponent},
  {path: 'listaEntidades/listPublicador', component: ListPublicadorComponent},
  {path: 'registroEntidades/newPublicador', component: CreatePublicadorComponent},
  {path: 'showPublicador', component: ShowPublicadorComponent},
  {path: 'listaEntidades/listVivienda', component: ListViviendaComponent},
  {path: 'registroEntidades/newVivienda', component: CreateViviendaComponent},
  {path: 'registroEntidades/viviendapublicador', component: ViviendaPublicadorComponent},
  {path: 'registroEntidades/subirImagen/:id', component: SubirImagenComponent},
  {path: 'registroEntidades/imagenVivienda/:id', component: ImagenViviendaComponent},
  {path: 'filtrarVivienda/showVivienda', component: ShowViviendaComponent},
  {path: 'filtrarVivienda', component: FiltrarViviendaComponent},
  {path: 'encuesta', component: EncuestaComponent},
  {path: 'encuesta/msgRegistro', component: RegistroExitosoComponent},
  {path: 'tipoPublicador', component: TipoPublicadorComponent},
  {path: 'tipoPublicador/publicarInmueble', component: PublicarInmuebleComponent},
  {path: 'actualizarCliente', component: ActualizarClienteComponent },
  {path: 'actualizarVivienda', component: ActualizarViviendaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
