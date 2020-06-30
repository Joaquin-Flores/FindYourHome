import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionPublicadorComponent } from './eleccion-publicador.component';

describe('EleccionPublicadorComponent', () => {
  let component: EleccionPublicadorComponent;
  let fixture: ComponentFixture<EleccionPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
