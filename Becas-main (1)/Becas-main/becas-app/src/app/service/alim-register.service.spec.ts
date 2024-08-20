import { TestBed } from '@angular/core/testing';

import { AlimRegisterService } from './alim-register.service';

describe('AlimRegisterService', () => {
  let service: AlimRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
