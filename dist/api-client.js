"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const axios_1 = require("axios");
const config_1 = require("./config");
let apiClient;
const getClient = () => {
    if (!apiClient) {
        apiClient = axios_1.default.create({
            baseURL: process.env.BLUSALT_API_URL || "https://wallets.blusalt.net",
            headers: {
                Accept: 'application/json',
                'x-api-key': config_1.default.getAPIKey()
            }
        });
    }
    return apiClient;
};
exports.getClient = getClient;
