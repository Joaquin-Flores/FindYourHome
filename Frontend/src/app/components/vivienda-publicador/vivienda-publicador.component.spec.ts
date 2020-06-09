import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaPublicadorComponent } from './vivienda-publicador.component';

describe('ViviendaPublicadorComponent', () => {
  let component: ViviendaPublicadorComponent;
  let fixture: ComponentFixture<ViviendaPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
