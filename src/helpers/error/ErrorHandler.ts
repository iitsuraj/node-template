import Logger from 'src/logger';
type ErrorTypes =
    | 'api_connection_error'
    | 'api_error'
    | 'authentication_error'
    | 'invalid_request_error'
    | 'rate_limit_error'
    | 'validation_error'
    | string;
class ErrorHandler extends Error {
    statusCode: number;
    message: string;
    errorTypes: ErrorTypes;
    oerror: any;
    constructor(statusCode: number, message: string, errorTypes: ErrorTypes, oerror: any) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.errorTypes = errorTypes;
        Logger.error(oerror);
    }
}

export default ErrorHandler;
