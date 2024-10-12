import { TestBed } from '@angular/core/testing';

import { EventProcessorService } from './event-processor.service';

describe('EventProcessorService', () => {
  let service: EventProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
