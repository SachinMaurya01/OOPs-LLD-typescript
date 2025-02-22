"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var parser_1 = require("./parser");
(0, globals_1.describe)('Crontab parser', function () {
    (0, globals_1.test)('should parse a crontab entry 1 1 1 1 1', function () {
        var parsedCrontab = (0, parser_1.parseCronString)('1 1 1 1 1');
        (0, globals_1.expect)(parsedCrontab).toEqual({
            minute: [1],
            hour: [1],
            dayOfMonth: [1],
            month: [1],
            dayOfWeek: [1],
        });
    });
});
