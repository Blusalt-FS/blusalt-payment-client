import { AxiosInstance } from "axios";
export declare type Customer = {
    gender: "M" | "F";
    first_name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    mobile_no: string;
    bvn?: string | null | undefined;
    nin?: string | null | undefined;
};
export declare type Business = {
    name: string;
    rc_number: string;
    address: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile_no: string;
};
export declare type CreateReservedAccountRequest = {
    currency: string;
    customer: Customer;
};
export declare type CreateBusinessReservedAccountRequest = {
    currency: string;
    business: Business;
};
export declare type CreateWalletRequest = {
    wallet_reference: string;
    currency: string;
    customer: Customer;
    type: "bank" | "wallet";
};
export declare type ReservedAccount = {
    reference: string;
    account_name: string;
    account_number: string;
    bank_name: "string";
    updatedAt: string;
    createdAt: string;
    total_transactions: number;
    total_transactions_value: number;
};
export declare type BlusaltWallet = {
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
export declare type DebitWalletRequest = {
    amount: number;
    currency?: string;
};
export declare type TransferRequest = {
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
export declare type CreditWalletRequest = {
    amount: number;
    currency?: string;
};
export declare type Transaction = {
    reference: string;
    amount: number;
    status: "pending" | "successful" | "failed";
    narration?: string;
    currency: string;
    metadata?: object;
};
export declare type ResolvedBankAccount = {
    account_number: string;
    account_name: string;
};
export declare type Bank = {
    name: string;
    code: string;
};
export declare class Wallet {
    apiKey: string;
    baseUrl: string;
    client: AxiosInstance;
    constructor({ apiKey, baseUrl }: {
        apiKey?: string;
        baseUrl?: string;
    });
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
