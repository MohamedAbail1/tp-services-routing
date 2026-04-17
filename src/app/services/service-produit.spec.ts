import { TestBed } from '@angular/core/testing';

import { ServiceProduit } from './service-produit';

describe('ServiceProduit', () => {
  let service: ServiceProduit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProduit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
