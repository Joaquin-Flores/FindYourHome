import { TestBed } from '@angular/core/testing';

import { ListadeseoService } from './listadeseo.service';

describe('ListadeseoService', () => {
  let service: ListadeseoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadeseoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
