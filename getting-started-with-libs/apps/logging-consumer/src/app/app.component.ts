import { Component, OnInit } from '@angular/core';
import { LoggingWithConfigService } from '@angularlicious/logging-with-config';
import { LoggingService } from '@angularlicious/logging';

@Component({
  selector: 'angularlicious-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'logging-consumer';

  constructor(
    private logging: LoggingService,
    private loggingService: LoggingWithConfigService
  ) {
    this.logging.log(`Running constructor from AppComponent`);
  }

  ngOnInit(): void {
    this.loggingService.log(`Running ngOnInit from AppComponent`);
  }
}
