export class Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;

  constructor(id: number, nombre: string, apellidos: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }
}
