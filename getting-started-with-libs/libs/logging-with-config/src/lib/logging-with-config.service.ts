import { Injectable } from "@angular/core";
import { LoggingWithConfig } from "./logging-with-config";


@Injectable()
export class LoggingWithConfigService {

    name: string;
    
    constructor(config: LoggingWithConfig) {
        this.name = config.name;
    }

    log(message: string) {
        console.log(`${this.name}: ${message} at ${new Date(Date.now()).toLocaleTimeString()}`);
    }
}