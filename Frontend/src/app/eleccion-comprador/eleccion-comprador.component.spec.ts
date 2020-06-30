import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionCompradorComponent } from './eleccion-comprador.component';

describe('EleccionCompradorComponent', () => {
  let component: EleccionCompradorComponent;
  let fixture: ComponentFixture<EleccionCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
