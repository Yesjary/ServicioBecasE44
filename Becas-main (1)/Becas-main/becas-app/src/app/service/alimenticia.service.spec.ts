import { TestBed } from '@angular/core/testing';

import { AlimenticiaService } from './alimenticia.service';

describe('AlimenticiaService', () => {
  let service: AlimenticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimenticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
