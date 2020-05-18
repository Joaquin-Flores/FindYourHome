import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPublicadorComponent } from './show-publicador.component';

describe('ShowPublicadorComponent', () => {
  let component: ShowPublicadorComponent;
  let fixture: ComponentFixture<ShowPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
