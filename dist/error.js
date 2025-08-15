"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlusaltError = void 0;
class BlusaltError extends Error {
    constructor(response) {
        super(response.message);
        this.errorCode = response.error_code;
        this.error = response.error;
    }
}
exports.BlusaltError = BlusaltError;
