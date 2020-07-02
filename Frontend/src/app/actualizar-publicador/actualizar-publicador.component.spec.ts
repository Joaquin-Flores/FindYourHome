import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPublicadorComponent } from './actualizar-publicador.component';

describe('ActualizarPublicadorComponent', () => {
  let component: ActualizarPublicadorComponent;
  let fixture: ComponentFixture<ActualizarPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
