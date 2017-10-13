import { TestBed, inject } from '@angular/core/testing';

import { JokeServiceService } from './joke-service.service';

describe('JokeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeServiceService]
    });
  });

  it('should be created', inject([JokeServiceService], (service: JokeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
