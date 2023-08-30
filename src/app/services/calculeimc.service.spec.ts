import { TestBed } from '@angular/core/testing';

import { CalculeimcService } from './calculeimc.service';

describe('CalculeimcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculeimcService = TestBed.get(CalculeimcService);
    expect(service).toBeTruthy();
  });
});
