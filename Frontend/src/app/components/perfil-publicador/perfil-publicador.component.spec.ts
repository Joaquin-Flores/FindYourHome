import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPublicadorComponent } from './perfil-publicador.component';

describe('PerfilPublicadorComponent', () => {
  let component: PerfilPublicadorComponent;
  let fixture: ComponentFixture<PerfilPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
