import { TestBed } from '@angular/core/testing';

import { AddCartService } from './add-cart.service';

describe('AddCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCartService = TestBed.get(AddCartService);
    expect(service).toBeTruthy();
  });
});
