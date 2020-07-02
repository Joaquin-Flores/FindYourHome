import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuspiciadorComponent } from './create-auspiciador.component';

describe('CreateAuspiciadorComponent', () => {
  let component: CreateAuspiciadorComponent;
  let fixture: ComponentFixture<CreateAuspiciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAuspiciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuspiciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
