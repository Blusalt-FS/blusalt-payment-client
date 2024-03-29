import { AxiosInstance } from "axios";
type Customer = {
    gender: "M" | "F";
    first_name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    mobile_no: string;
    bvn?: string | null | undefined;
    nin?: string | null | undefined;
};
type Business = {
    name: string;
    "rc_number": string;
    "address": string;
    "first_name": string;
    "last_name": string;
    "email": string;
    "mobile_no": string;
};
type CreateReservedAccountRequest = {
    currency: string;
    customer: Customer;
};
type CreateBusinessReservedAccountRequest = {
    currency: string;
    business: Business;
};
type CreateWalletRequest = {
    wallet_reference: string;
    currency: string;
    customer: Customer;
    type: "bank" | "wallet";
};
type ReservedAccount = {
    "reference": string;
    "account_name": string;
    "account_number": string;
    "bank_name": "string";
    "updatedAt": string;
    "createdAt": string;
    "total_transactions": number;
    "total_transactions_value": number;
};
type BlusaltWallet = {
    wallet_reference: string;
    wallet_id: string;
    currency: string;
    active: boolean;
    account_name: string;
    account_number: string;
    bank_name: string;
    bank_code: string;
    balance: number;
    customer: Customer;
    createdAt: string;
    updatedAt: string;
};
type DebitWalletRequest = {
    amount: number;
    currency?: string;
};
type TransferRequest = {
    otp?: string;
    type?: "wallet" | "subscription" | "blusalt-core";
    transaction_reference: string;
    metadata?: object;
    amount: number;
    wallet_reference: string;
    currency?: string;
    narration?: string;
    destination: {
        type: "bank" | "wallet";
        recipient: string;
        bank_code?: string;
    };
};
type CreditWalletRequest = {
    amount: number;
    currency?: string;
};
type Transaction = {
    reference: string;
    amount: number;
    status: "pending" | "successful" | "failed";
    narration?: string;
    currency: string;
    metadata?: object;
};
type ResolvedBankAccount = {
    account_number: string;
    account_name: string;
};
type Bank = {
    name: string;
    code: string;
};
export declare class Wallet {
    apiKey: string;
    client: AxiosInstance;
    constructor(apiKey?: string);
    createWallet(body: CreateWalletRequest): Promise<BlusaltWallet>;
    createReservedAccount(body: CreateReservedAccountRequest): Promise<ReservedAccount>;
    createBusinessReservedAccount(body: CreateBusinessReservedAccountRequest): Promise<ReservedAccount>;
    getWallets(reference: string): Promise<BlusaltWallet[]>;
    getWallet(reference: string): Promise<BlusaltWallet>;
    debitWallet(reference: string, request: DebitWalletRequest): Promise<Transaction>;
    creditWallet(reference: string, request: CreditWalletRequest): Promise<Transaction>;
    transfer(request: TransferRequest): Promise<Transaction>;
    getTransaction(reference: string): Promise<Transaction>;
    resolveBankAccount(accountNumber: string, bankCode: string): Promise<ResolvedBankAccount>;
    getBanks(): Promise<Bank[]>;
}
export {};
