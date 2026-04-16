"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (error, req, res, next) => {
    const formattedStack = error.stack
        ? error.stack
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
        : [];
    const status = error.statusCode || 500;
    return res.status(status).json({
        message: error.message || "Internal Server Error ✖",
        type: error.name,
        details: {
            cause: error.cause,
            stack: formattedStack,
            error,
        },
    });
};
exports.globalErrorHandler = globalErrorHandler;
