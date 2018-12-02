import { Component, OnInit } from '@angular/core';
import { LoggingService } from '@angularlicious/logging';

@Component({
  selector: 'angularlicious-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'logging-consumer';

  constructor(
    private loggingService: LoggingService
  ) {
    this.loggingService.log(`Message from constructor at ${new Date(Date.now()).toLocaleTimeString()}`)
  }

  ngOnInit(): void {
    this.loggingService.log(`Message from ngOnInit at ${new Date(Date.now()).toLocaleTimeString()}`)
  }
}
