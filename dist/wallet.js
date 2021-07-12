"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("./api-client");
exports.default = {
    createWallet(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield api_client_1.default.post('/wallets', body)).data.data;
        });
    },
    getWallet(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield api_client_1.default.post(`/wallets/${reference}`)).data.data;
        });
    },
    debitWallet(reference, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign(Object.assign({}, request), { action: "debit" });
            return (yield api_client_1.default.put(`/wallets/${reference}`, body)).data.data;
        });
    },
    creditWallet(reference, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign(Object.assign({}, request), { action: "credit" });
            return (yield api_client_1.default.put(`/wallets/${reference}`, body)).data.data;
        });
    },
    transfer(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign(Object.assign({}, request), { action: "transfer" });
            // @ts-ignore
            delete body.wallet_reference;
            return (yield api_client_1.default.put(`/wallets/${request.wallet_reference}`, body)).data.data;
        });
    },
    getTransaction(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield api_client_1.default.get(`/transactions/${reference}`)).data.data;
        });
    }
};
