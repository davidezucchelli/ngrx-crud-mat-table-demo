import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('ContoLavoroService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
