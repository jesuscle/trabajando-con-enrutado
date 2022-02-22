import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() textoTitulo: string = 'Hello, World!';
  @Input() primerParrafo: string = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
  @Input() segundoParrafo:string = 'It uses utility classes for typography and spacing to space content out within the larger container.';
  @Input() textoBoton:string = 'Botón Primario';

  constructor() { }

  ngOnInit(): void {
  }

}
