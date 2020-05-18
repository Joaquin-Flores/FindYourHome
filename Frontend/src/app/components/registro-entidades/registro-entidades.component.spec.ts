import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntidadesComponent } from './registro-entidades.component';

describe('RegistroEntidadesComponent', () => {
  let component: RegistroEntidadesComponent;
  let fixture: ComponentFixture<RegistroEntidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEntidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
