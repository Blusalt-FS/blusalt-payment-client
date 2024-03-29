import { getClient } from './api-client';
import { BlusaltError } from "./error";
import {AxiosInstance} from "axios";

type Customer = {
    gender: "M" | "F"
    first_name: string
    last_name: string
    middle_name?: string
    email: string
    mobile_no: string
    bvn?: string | null | undefined
    nin?: string | null | undefined
}

type Business = {
    name: string,
    "rc_number": string,
    "address": string,
    "first_name": string,
    "last_name": string,
    "email": string,
    "mobile_no": string
}

type BankAccount = {
    account_number: string
    account_name: string
    bank_name: string
    bank_code: string
}

type CreateReservedAccountRequest = {
    currency: string
    customer: Customer
}

type CreateBusinessReservedAccountRequest = {
    currency: string
    business: Business
}
type CreateWalletRequest = {
    wallet_reference: string
    currency: string
    customer: Customer
    type: "bank" | "wallet"
}

type ReservedAccount = {
    "reference": string,
    "account_name": string,
    "account_number": string,
    "bank_name": "string",
    "updatedAt": string,
    "createdAt": string,
    "total_transactions": number,
    "total_transactions_value": number
}
type BlusaltWallet = {
    wallet_reference: string
    wallet_id: string
    currency: string
    active: boolean
    account_name: string
    account_number: string
    bank_name: string
    bank_code: string
    balance: number
    customer: Customer
    // bank: BankAccount
    createdAt: string
    updatedAt: string
}

type DebitWalletRequest = {
    amount: number
    currency?: string
}

type TransferRequest = {
    otp?: string,
    type?: "wallet" | "subscription" | "blusalt-core",
    transaction_reference: string,
    metadata?: object,
    amount: number
    wallet_reference: string,
    currency?: string
    narration?: string
    destination: {
        type: "bank" | "wallet"
        recipient: string
        bank_code?: string
    }
}

type CreditWalletRequest = {
    amount: number
    currency?: string
}
type Transaction = {
    reference: string
    amount: number
    status: "pending" | "successful" | "failed"
    narration?: string
    currency: string
    metadata?: object
}

type ResolvedBankAccount = {
    account_number: string
    account_name: string
}

type Bank = {
    name: string
    code: string
}
function handleResponse(data: any, single = false): any {
    if (data.status){

        if (Array.isArray(data.data) && single){
            return data.data[0];
        }
        return data.data;
    } else {
        throw new BlusaltError(data.message);
    }
}

export class Wallet {
    apiKey: string = "";
    client: AxiosInstance;
    constructor(apiKey?: string) {
        if (apiKey)
            this.apiKey = apiKey;

        this.client = getClient(apiKey || process.env.BLUSALT_API_KEY);
    }

    async createWallet(body: CreateWalletRequest): Promise<BlusaltWallet>{
        return handleResponse((await this.client.post('/wallets', body)).data);
    }

    async createReservedAccount(body: CreateReservedAccountRequest): Promise<ReservedAccount>{
        return handleResponse((await this.client.post('/reserved-accounts', body)).data);
    }

    async createBusinessReservedAccount(body: CreateBusinessReservedAccountRequest): Promise<ReservedAccount>{
        return handleResponse((await this.client.post('/reserved-accounts', body)).data);
    }

    async getWallets(reference: string): Promise<BlusaltWallet[]>{
        return handleResponse((await this.client.get(`/wallets/${reference}`)).data);
    }

    async getWallet(reference: string): Promise<BlusaltWallet>{
        return handleResponse((await this.client.get(`/wallets/${reference}`)).data, true);
    }

    async debitWallet(reference: string, request: DebitWalletRequest ): Promise<Transaction>{
        const body = {...request, action: "debit"};
        return handleResponse((await this.client.put(`/wallets/${reference}`, body)).data);
    }

    async creditWallet(reference: string, request: CreditWalletRequest ): Promise<Transaction>{
        const body = {...request, action: "credit"};
        return handleResponse((await this.client.put(`/wallets/${reference}`, body)).data);
    }

    async transfer(request: TransferRequest ): Promise<Transaction>{
        const body = {...request, action: "transfer"};
        // @ts-ignore
        delete body.wallet_reference;
        return handleResponse((await this.client.put(`/wallets/${request.wallet_reference}`, body)).data);
    }

    async getTransaction(reference: string): Promise<Transaction>{
        return handleResponse((await this.client.get(`/transactions/${reference}`)).data);
    }

    async resolveBankAccount(accountNumber: string, bankCode: string): Promise<ResolvedBankAccount>{
        return handleResponse((await this.client.get(`/resolve-bank/${accountNumber}?bank_code=${bankCode}`)).data);
    }

    async getBanks(): Promise<Bank[]>{
        return handleResponse((await this.client.get(`/banks`)).data);
    }

}
