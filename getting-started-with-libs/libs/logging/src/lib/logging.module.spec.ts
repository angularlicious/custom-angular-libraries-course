import { async, TestBed } from '@angular/core/testing';
import { LoggingModule } from './logging.module';

describe('LoggingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoggingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoggingModule).toBeDefined();
  });
});
