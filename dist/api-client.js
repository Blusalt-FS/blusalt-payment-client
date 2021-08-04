"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const axios_1 = require("axios");
const getClient = (apiKey) => {
    return axios_1.default.create({
        baseURL: process.env.BLUSALT_API_URL || "https://wallets.blusalt.net",
        headers: {
            Accept: 'application/json',
            'x-api-key': apiKey || process.env.BLUSALT_API_KEY
        }
    });
};
exports.getClient = getClient;
