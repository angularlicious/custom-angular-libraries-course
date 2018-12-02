import { Injectable } from "@angular/core";
import { LoggingConfig } from "./logging-config";


@Injectable()
export class LoggingWithConfigService {

    name: string;
    
    constructor(config: LoggingConfig) {
        this.name = config.name;
    }

    /**
     * Use to log information to the console.
     */
    log(message: string) {
        console.log(`${this.name}: ${message} at ${new Date(Date.now()).toLocaleTimeString()}`);
    }
}