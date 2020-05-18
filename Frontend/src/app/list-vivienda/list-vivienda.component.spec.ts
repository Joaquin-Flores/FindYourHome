import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViviendaComponent } from './list-vivienda.component';

describe('ListViviendaComponent', () => {
  let component: ListViviendaComponent;
  let fixture: ComponentFixture<ListViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
