import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCiudadesComponent } from './tarjeta-ciudades.component';

describe('TarjetaCiudadesComponent', () => {
  let component: TarjetaCiudadesComponent;
  let fixture: ComponentFixture<TarjetaCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
