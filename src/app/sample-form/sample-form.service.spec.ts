import { TestBed } from '@angular/core/testing';

import { SampleFormService } from './sample-form.service';

describe('SampleFormService', () => {
  let service: SampleFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
