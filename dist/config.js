"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apiKey = process.env.BLUSALT_API_KEY;
exports.default = {
    setAPIKey(_apiKey) {
        apiKey = _apiKey;
    },
    getAPIKey() {
        return apiKey;
    }
};
