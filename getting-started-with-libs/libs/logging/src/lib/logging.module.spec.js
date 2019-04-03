"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var logging_module_1 = require("./logging.module");
describe('LoggingModule', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [logging_module_1.LoggingModule]
        }).compileComponents();
    }));
    it('should create', function () {
        expect(logging_module_1.LoggingModule).toBeDefined();
    });
});
//# sourceMappingURL=logging.module.spec.js.map