import { TestBed } from '@angular/core/testing';

import {ExterRegisterService} from './exter-register.service';

describe('ExterRegisterService', () => {
  let service: ExterRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExterRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
