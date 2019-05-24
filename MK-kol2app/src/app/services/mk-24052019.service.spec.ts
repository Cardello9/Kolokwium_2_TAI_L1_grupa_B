import { TestBed } from '@angular/core/testing';

import { MK24052019Service } from './mk-24052019.service';

describe('MK24052019Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MK24052019Service = TestBed.get(MK24052019Service);
    expect(service).toBeTruthy();
  });
});
