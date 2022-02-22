import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Factura } from '../modelos/factura';

@Component({
  selector: 'app-factura-edicion',
  templateUrl: './factura-edicion.component.html',
  styleUrls: ['./factura-edicion.component.css']
})
export class FacturaEdicionComponent implements OnInit {

  factura: Factura = new Factura(0, 0, '', '', '', new Date());

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      if(params.id!==undefined){
        this.factura = this.recuperarFactura(params.id);
      }
    });
  }

  private recuperarFactura(id: number): Factura{
      return new Factura(1, 1000, 'Boda', '002312C', 'Antonio Vicente', new Date());
  }

  guardarFactura(form: NgForm){
    if(form.valid){

    }
  }

}
