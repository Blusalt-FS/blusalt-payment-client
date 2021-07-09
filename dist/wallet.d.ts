declare type Customer = {
    gender: "M" | "F";
    first_name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    mobile_no: string;
};
declare type BankAccount = {
    account_number: string;
    account_name: string;
    bank_name: string;
    bank_code: string;
};
declare type CreateWalletRequest = {
    wallet_reference: string;
    currency?: string;
    customer: Customer;
    type?: "bank" | "wallet";
};
declare type Wallet = {
    wallet_reference: string;
    wallet_id: string;
    currency: string;
    balance: number;
    customer: Customer;
    bank: BankAccount;
    createdAt: string;
    updatedAt: string;
};
declare type DebitWalletRequest = {
    amount: number;
    currency?: string;
};
declare type TransferRequest = {
    amount: number;
    currency?: string;
    narration?: string;
    destination: {
        type: "bank" | "wallet";
        recipient: string;
        bank_code?: string;
    };
};
declare type CreditWalletRequest = {
    amount: number;
    currency?: string;
};
declare type Transaction = {
    reference: string;
    amount: number;
    status: "pending" | "successful" | "failed";
    narration?: string;
    currency: string;
    metadata?: object;
};
declare const _default: {
    createWallet(body: CreateWalletRequest): Promise<Wallet>;
    getWallet(reference: string): Promise<Wallet>;
    debitWallet(reference: string, request: DebitWalletRequest): Promise<Transaction>;
    creditWallet(reference: string, request: CreditWalletRequest): Promise<Transaction>;
    transfer(reference: string, request: TransferRequest): Promise<Transaction>;
    getTransaction(reference: string): Promise<Transaction>;
};
export default _default;
