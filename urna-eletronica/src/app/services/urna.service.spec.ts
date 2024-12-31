import { TestBed } from '@angular/core/testing';

import { UrnaService } from './urna.service';

describe('UrnaService', () => {
  let service: UrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
