import { TestBed } from '@angular/core/testing';

import { ToolbarPropogateService } from './toolbar-propogate.service';

describe('ToolbarPropogateService', () => {
  let service: ToolbarPropogateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarPropogateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
