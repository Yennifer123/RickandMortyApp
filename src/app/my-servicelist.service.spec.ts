import { TestBed } from '@angular/core/testing';

import { MyServicelistService } from './my-servicelist.service';

describe('MyServicelistService', () => {
  let service: MyServicelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServicelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
