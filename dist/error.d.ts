export declare class BlusaltError extends Error {
    errorCode: string;
    error: string;
    constructor(response: {
        message: string;
        error_code: string;
        error: string;
    });
}
