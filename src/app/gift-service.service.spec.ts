import { TestBed } from '@angular/core/testing';

import { GiftServiceService } from './gift-service.service';

describe('GiftServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftServiceService = TestBed.get(GiftServiceService);
    expect(service).toBeTruthy();
  });
});
