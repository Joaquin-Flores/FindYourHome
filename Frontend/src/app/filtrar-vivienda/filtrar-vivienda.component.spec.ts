import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarViviendaComponent } from './filtrar-vivienda.component';

describe('FiltrarViviendaComponent', () => {
  let component: FiltrarViviendaComponent;
  let fixture: ComponentFixture<FiltrarViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
