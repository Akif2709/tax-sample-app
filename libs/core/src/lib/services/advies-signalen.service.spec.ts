import { TestBed } from '@angular/core/testing';

import { AdviesSignalenService } from './advies-signalen.service';

describe('AdviesSignalenService', () => {
  let service: AdviesSignalenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviesSignalenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
