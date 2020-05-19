import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicadorComponent } from './tipo-publicador.component';

describe('TipoPublicadorComponent', () => {
  let component: TipoPublicadorComponent;
  let fixture: ComponentFixture<TipoPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
