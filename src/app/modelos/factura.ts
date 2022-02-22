export class Factura {

  id: number;
  importe: number;
  concepto: string;
  cif: string;
  cliente: string;
  fechaEmision: Date;

  constructor(id: number, importe: number, concepto: string, cif: string, cliente: string, fechaEmision: Date) {
    this.id = id;
    this.importe = importe;
    this.concepto = concepto;
    this.cif = cif;
    this.cliente = cliente;
    this.fechaEmision = fechaEmision;
  }

}
