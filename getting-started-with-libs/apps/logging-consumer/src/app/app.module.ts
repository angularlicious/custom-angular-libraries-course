import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LoggingWithConfigService } from '@angularlicious/logging-with-config';

const config = {
  name: 'NG-APP-CONFIG'
}
import { LoggingModule, LoggingService } from '@angularlicious/logging';
import { LoggingWithConfigModule } from 'dist/libs/logging-with-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    LoggingWithConfigModule.forRoot(config)
  ],
  providers: [
    LoggingWithConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
