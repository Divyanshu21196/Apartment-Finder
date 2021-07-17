import { TestBed } from '@angular/core/testing';

import { DataApartmentService } from './data-apartment.service';

describe('DataApartmentService', () => {
  let service: DataApartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
