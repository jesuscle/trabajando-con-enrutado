import { Component, OnInit } from '@angular/core';
import { Factura } from '../modelos/factura';

@Component({
  selector: 'app-factura-listado',
  templateUrl: './factura-listado.component.html',
  styleUrls: ['./factura-listado.component.css']
})
export class FacturaListadoComponent implements OnInit {

  facturas: Array<Factura> = new Array<Factura>();
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.facturas.push(new Factura(1, 1000, 'Boda', '002312C', 'Antonio Vicente', new Date()));
    this.facturas.push(new Factura(2, 637, 'Coche', '72618D', 'Laura', new Date()));
    this.facturas.push(new Factura(28, 30, 'Endesa', '79927Z', 'Alguien', new Date()));
  }

}
