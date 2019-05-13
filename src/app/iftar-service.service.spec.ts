import { TestBed } from '@angular/core/testing';

import { IftarServiceService } from './iftar-service.service';

describe('IftarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IftarServiceService = TestBed.get(IftarServiceService);
    expect(service).toBeTruthy();
  });
});
