import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarPublicadorComponent } from './configurar-publicador.component';

describe('ConfigurarPublicadorComponent', () => {
  let component: ConfigurarPublicadorComponent;
  let fixture: ComponentFixture<ConfigurarPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurarPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
