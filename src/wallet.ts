import apiClient from './api-client';

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

type BankAccount = {
    account_number: string
    account_name: string
    bank_name: string
    bank_code: string
}

type CreateWalletRequest = {
    wallet_reference: string
    currency?:string
    customer: Customer
    type?: "bank" | "wallet"
}

type Wallet = {
    wallet_reference: string
    wallet_id: string
    currency: string
    balance: number
    customer: Customer
    bank: BankAccount
    createdAt: string
    updatedAt: string
}

type DebitWalletRequest = {
    amount: number
    currency?: string
}

type TransferRequest = {
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
export default {
    async createWallet(body: CreateWalletRequest): Promise<Wallet>{
        return (await apiClient.post('/wallets', body)).data.data;
    },
    async getWallet(reference: string): Promise<Wallet>{
        return (await apiClient.post(`/wallets/${reference}`)).data.data;
    },
    async debitWallet(reference: string, request: DebitWalletRequest ): Promise<Transaction>{
        const body = {...request, action: "debit"};
        return (await apiClient.put(`/wallets/${reference}`, body)).data.data;
    },
    async creditWallet(reference: string, request: CreditWalletRequest ): Promise<Transaction>{
        const body = {...request, action: "credit"};
        return (await apiClient.put(`/wallets/${reference}`, body)).data.data;
    },
    async transfer(request: TransferRequest ): Promise<Transaction>{
        const body = {...request, action: "transfer"};
        // @ts-ignore
        delete body.wallet_reference;
        return (await apiClient.put(`/wallets/${request.wallet_reference}`, body)).data.data;
    },
    async getTransaction(reference: string): Promise<Transaction>{
        return (await apiClient.get(`/transactions/${reference}`)).data.data;
    }
}
