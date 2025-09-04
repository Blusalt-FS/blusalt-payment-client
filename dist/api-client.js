"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const axios_1 = require("axios");
const getClient = (apiKey, baseUrl) => {
    return axios_1.default.create({
        baseURL: baseUrl || process.env.BLUSALT_API_URL || "https://wallets.blusalt.net",
        headers: {
            Accept: "application/json",
            "x-api-key": apiKey || process.env.BLUSALT_API_KEY,
        },
        validateStatus: (status) => {
            return true;
        },
    });
};
exports.getClient = getClient;
