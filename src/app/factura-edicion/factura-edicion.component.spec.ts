import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaEdicionComponent } from './factura-edicion.component';

describe('FacturaEdicionComponent', () => {
  let component: FacturaEdicionComponent;
  let fixture: ComponentFixture<FacturaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
