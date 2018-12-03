import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LoggingWithConfigModule } from '@angularlicious/logging-with-config';
import { LoggingWithConfigService } from '@angularlicious/logging-with-config';

const config = {
  name: 'NG-APP-CONFIG'
}

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
