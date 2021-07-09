"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = axios_1.default.create({
    baseURL: "https://wallets.blusalt.net",
    headers: {
        Accept: 'application/json',
        'x-api-key': process.env.BLUSALT_API_KEY
    }
});
