import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPublicadorComponent } from './login-publicador.component';

describe('LoginPublicadorComponent', () => {
  let component: LoginPublicadorComponent;
  let fixture: ComponentFixture<LoginPublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
