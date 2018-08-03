import { TestBed, inject } from '@angular/core/testing';

import { BnNgSearchService } from './bn-ng-search.service';

describe('BnNgSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnNgSearchService]
    });
  });

  it('should be created', inject([BnNgSearchService], (service: BnNgSearchService) => {
    expect(service).toBeTruthy();
  }));
});
