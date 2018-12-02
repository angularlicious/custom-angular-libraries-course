import { async, TestBed } from '@angular/core/testing';
import { LoggingWithConfigModule } from './logging-with-config.module';

describe('LoggingWithConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoggingWithConfigModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoggingWithConfigModule).toBeDefined();
  });
});
