import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingConfig } from './logging-config';

@NgModule({
  imports: [CommonModule]
})
export class LoggingWithConfigModule {
  static forRoot(config: LoggingConfig): ModuleWithProviders {
    return {
      ngModule: LoggingWithConfigModule,
      providers: [
        {
          provide: LoggingConfig,
          useValue: config
        }
      ]
    }
  }
}
