import { TestBed } from '@angular/core/testing';

import { PlayerSearchService } from './player-search.service';

describe('PlayerSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerSearchService = TestBed.get(PlayerSearchService);
    expect(service).toBeTruthy();
  });
});
