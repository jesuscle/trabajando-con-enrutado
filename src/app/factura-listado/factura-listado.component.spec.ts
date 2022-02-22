import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaListadoComponent } from './factura-listado.component';

describe('FacturaListadoComponent', () => {
  let component: FacturaListadoComponent;
  let fixture: ComponentFixture<FacturaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
