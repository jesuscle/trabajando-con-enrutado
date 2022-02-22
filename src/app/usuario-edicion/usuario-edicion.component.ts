import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css'],
})
export class UsuarioEdicionComponent implements OnInit {

  usuario: Usuario = new Usuario(0, '', '', 0);

  constructor(private rutaActiva: ActivatedRoute, private enrutador: Router) {
    console.log(this.usuario);
  }

  ngOnInit(): void {
    // Recuperando el parámetro
    this.rutaActiva.params.subscribe((params: Params) => {
      this.usuario = this.recuperarUsuario(params.id);
    });
  }

  guardarUsuario(form: NgForm){
    if(form.valid){
      // Se guarda el usuario
      // ...
    }

    // Navegar al listado de usuarios
    this.enrutador.navigateByUrl('/usuario');

  }

  private recuperarUsuario(id: number): Usuario {
    // Totalmente falso
    return new Usuario(1, 'Antonio', 'García', 78);
  }
}
