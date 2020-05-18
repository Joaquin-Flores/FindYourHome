import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicadorComponent } from './list-publicador.component';

describe('ListPublicadorComponent', () => {
  let component: ListPublicadorComponent;
  let fixture: ComponentFixture<ListPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
