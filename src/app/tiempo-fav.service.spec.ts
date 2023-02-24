import { TestBed } from '@angular/core/testing';

import { TiempoFavService } from './tiempo-fav.service';

describe('TiempoFavService', () => {
  let service: TiempoFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiempoFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
