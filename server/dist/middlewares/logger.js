"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Indispensable pour passer à la suite !
};
exports.requestLogger = requestLogger;
//# sourceMappingURL=logger.js.map