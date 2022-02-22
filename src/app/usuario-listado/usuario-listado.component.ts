import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {

  usuarios = new Array<Usuario>();
  constructor() { }

  ngOnInit(): void {

    let u1 = new Usuario(1, 'Antonio','García',78);
    this.usuarios.push(u1);

    let u2 = new Usuario(2, 'Carla','Pérez',23);
    this.usuarios.push(u2);

    let u3 = new Usuario(21, 'Javier','Soler',31);
    this.usuarios.push(u3);

  }

}
