import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaEdicionComponent } from './factura-edicion/factura-edicion.component';
import { FacturaListadoComponent } from './factura-listado/factura-listado.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'usuario', component: UsuarioListadoComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'editarusuario/:id', component: UsuarioEdicionComponent},
  {path: 'factura', component: FacturaListadoComponent},
  {path: 'crearfactura', component: FacturaEdicionComponent},
  {path: 'editarfactura/:id', component: FacturaEdicionComponent},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
