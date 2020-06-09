import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenViviendaComponent } from './imagen-vivienda.component';

describe('ImagenViviendaComponent', () => {
  let component: ImagenViviendaComponent;
  let fixture: ComponentFixture<ImagenViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
