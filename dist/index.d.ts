declare const _default: {
    wallet: {
        createWallet(body: {
            wallet_reference: string;
            currency: string;
            customer: {
                gender: "M" | "F";
                first_name: string;
                last_name: string;
                middle_name?: string | undefined;
                email: string;
                mobile_no: string;
                bvn?: string | null | undefined;
                nin?: string | null | undefined;
            };
            type: "bank" | "wallet";
        }): Promise<{
            wallet_reference: string;
            wallet_id: string;
            currency: string;
            balance: number;
            customer: {
                gender: "M" | "F";
                first_name: string;
                last_name: string;
                middle_name?: string | undefined;
                email: string;
                mobile_no: string;
                bvn?: string | null | undefined;
                nin?: string | null | undefined;
            };
            bank: {
                account_number: string;
                account_name: string;
                bank_name: string;
                bank_code: string;
            };
            createdAt: string;
            updatedAt: string;
        }>;
        getWallet(reference: string): Promise<{
            wallet_reference: string;
            wallet_id: string;
            currency: string;
            balance: number;
            customer: {
                gender: "M" | "F";
                first_name: string;
                last_name: string;
                middle_name?: string | undefined;
                email: string;
                mobile_no: string;
                bvn?: string | null | undefined;
                nin?: string | null | undefined;
            };
            bank: {
                account_number: string;
                account_name: string;
                bank_name: string;
                bank_code: string;
            };
            createdAt: string;
            updatedAt: string;
        }>;
        debitWallet(reference: string, request: {
            amount: number;
            currency?: string | undefined;
        }): Promise<{
            reference: string;
            amount: number;
            status: "failed" | "pending" | "successful";
            narration?: string | undefined;
            currency: string;
            metadata?: object | undefined;
        }>;
        creditWallet(reference: string, request: {
            amount: number;
            currency?: string | undefined;
        }): Promise<{
            reference: string;
            amount: number;
            status: "failed" | "pending" | "successful";
            narration?: string | undefined;
            currency: string;
            metadata?: object | undefined;
        }>;
        transfer(request: {
            amount: number;
            wallet_reference: string;
            currency?: string | undefined;
            narration?: string | undefined;
            destination: {
                type: "bank" | "wallet";
                recipient: string;
                bank_code?: string | undefined;
            };
        }): Promise<{
            reference: string;
            amount: number;
            status: "failed" | "pending" | "successful";
            narration?: string | undefined;
            currency: string;
            metadata?: object | undefined;
        }>;
        getTransaction(reference: string): Promise<{
            reference: string;
            amount: number;
            status: "failed" | "pending" | "successful";
            narration?: string | undefined;
            currency: string;
            metadata?: object | undefined;
        }>;
        resolveBankAccount(accountNumber: string, bankCode: string): Promise<{
            account_number: string;
            account_name: string;
        }>;
    };
};
export default _default;
