export class BlusaltError extends Error {
  errorCode: string;
  error: string;
  constructor(response: {
    message: string;
    error_code: string;
    error: string;
  }) {
    super(response.message);
    this.errorCode = response.error_code;
    this.error = response.error;
  }
}
