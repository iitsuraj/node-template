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
    constructor(statusCode: number, message: string, errorTypes: ErrorTypes) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.errorTypes = errorTypes;
    }
}

export default ErrorHandler;

// switch (err.type) {
//   case 'StripeCardError':
//     // A declined card error
//     err.message; // => e.g. "Your card's expiration year is invalid."
//     break;
//   case 'StripeRateLimitError':
//     // Too many requests made to the API too quickly
//     break;
//   case 'StripeInvalidRequestError':
//     // Invalid parameters were supplied to Stripe's API
//     break;
//   case 'StripeAPIError':
//     // An error occurred internally with Stripe's API
//     break;
//   case 'StripeConnectionError':
//     // Some kind of error occurred during the HTTPS communication
//     break;
//   case 'StripeAuthenticationError':
//     // You probably used an incorrect API key
//     break;
//   default:
//     // Handle any other types of unexpected errors
//     break;
// }
