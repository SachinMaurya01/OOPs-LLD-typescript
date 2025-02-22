"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCronString = void 0;
function parseCronString(cronString) {
    return {
        minute: [1],
        hour: [1],
        dayOfMonth: [1],
        month: [1],
        dayOfWeek: [1],
    };
}
exports.parseCronString = parseCronString;
