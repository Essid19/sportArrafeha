import { TestBed } from '@angular/core/testing';

import { ApiteamsService } from './apiteams.service';

describe('ApiteamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiteamsService = TestBed.get(ApiteamsService);
    expect(service).toBeTruthy();
  });
});
