import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { FacturaListadoComponent } from './factura-listado/factura-listado.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FacturaEdicionComponent } from './factura-edicion/factura-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioListadoComponent,
    FacturaListadoComponent,
    JumbotronComponent,
    PaginaNoEncontradaComponent,
    UsuarioEdicionComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    FacturaEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
