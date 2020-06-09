import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarViviendaComponent } from './actualizar-vivienda.component';

describe('ActualizarViviendaComponent', () => {
  let component: ActualizarViviendaComponent;
  let fixture: ComponentFixture<ActualizarViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
