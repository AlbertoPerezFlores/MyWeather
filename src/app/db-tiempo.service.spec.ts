import { TestBed } from '@angular/core/testing';

import { DbTiempoService } from './db-tiempo.service';

describe('DbTiempoService', () => {
  let service: DbTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
