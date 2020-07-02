import { NgModule } from '@angular/core';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
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
 import { AuspiciadorComponent } from './auspiciador/auspiciador.component'; 
 import {PrincipalComponent } from './principal/principal.component'; 
 import { PerfilusuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
 import { ComprasComponent } from './usuario/compras/compras.component';
import { ConfigurarComponent } from './usuario/configurar/configurar.component';
import { PerfilpublicadorComponent } from './components/perfil-publicador/perfil-publicador.component';
import { VentasComponent } from './publicador/ventas/ventas.component';
import { ConfigurarPublicadorComponent } from './publicador/configurar-publicador/configurar-publicador.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { EleccionCompradorComponent} from './eleccion-comprador/eleccion-comprador.component';
import { EleccionPublicadorComponent} from './eleccion-publicador/eleccion-publicador.component';
import { LoginCompradorComponent} from './login-comprador/login-comprador.component';
import { LoginPublicadorComponent} from './login-publicador/login-publicador.component';
import { ActualizarPublicadorComponent} from './actualizar-publicador/actualizar-publicador.component';

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
  {path: 'registroEntidades/viviendapublicador/:id', component: ViviendaPublicadorComponent},
  {path: 'registroEntidades/subirImagen/:id', component: SubirImagenComponent},
  {path: 'registroEntidades/imagenVivienda/:id', component: ImagenViviendaComponent},
  {path: 'encuesta', component: EncuestaComponent},
  {path: 'encuesta/msgRegistro', component: RegistroExitosoComponent},
  {path: 'tipoPublicador', component: TipoPublicadorComponent},
  {path: 'tipoPublicador/publicarInmueble', component: PublicarInmuebleComponent},
  {path: 'actualizarCliente', component: ActualizarClienteComponent },
  {path: 'actualizarVivienda', component: ActualizarViviendaComponent},
  {path: 'registrarAuspiciador', component: AuspiciadorComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'listaEntidades/listCliente', component: ListClienteComponent},
  {path: 'registroEntidades/newCliente', component: CreateClienteComponent},
  {path: 'showCliente', component: ShowClienteComponent},
  {path: 'listaEntidades/listPublicador', component: ListPublicadorComponent},
  {path: 'registroEntidades/newPublicador', component: CreatePublicadorComponent},
  {path: 'showPublicador', component: ShowPublicadorComponent},
  {path: 'listaEntidades/listVivienda', component: ListViviendaComponent},
  {path: 'registroEntidades/newVivienda', component: CreateViviendaComponent},
  {path: 'registroEntidades/viviendapublicador/:id', component: ViviendaPublicadorComponent},
  {path: 'registroEntidades/subirImagen/:id1/:id2', component: SubirImagenComponent},
  {path: 'registroEntidades/imagenVivienda/:id', component: ImagenViviendaComponent},
  {path: 'filtrarVivienda/showVivienda/:id', component: ShowViviendaComponent},
  {path: 'filtrarVivienda', component: FiltrarViviendaComponent},
  {path: 'tipoPublicador/:id', component: TipoPublicadorComponent},
  {path: 'perfilusuario', component: PerfilusuarioComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_CLIENTE'}},
  {path: 'perfilusuario/compras', component: ComprasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_CLIENTE'}},
  {path: 'perfilusuario/configurar', component: ConfigurarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_CLIENTE'}},
  {path: 'perfilpublicador', component: PerfilpublicadorComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_PUBLICADOR'}},
  {path: 'perfilpublicador/ventas', component: VentasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_PUBLICADOR'}},
  {path: 'perfilpublicador/configurar', component: ConfigurarPublicadorComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: 'ROLE_PUBLICADOR'}},
  {path: 'eleccion',component:EleccionComponent},
  {path: 'eleccionComprador',component:EleccionCompradorComponent},
  {path: 'eleccionPublicador',component:EleccionPublicadorComponent},
  {path: 'loginComprador',component:LoginCompradorComponent},
  {path: 'loginPublicador',component:LoginPublicadorComponent},
  {path: 'actualizarPublicador',component:ActualizarPublicadorComponent},
  {path: '', pathMatch: 'full', redirectTo: 'eleccion'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
