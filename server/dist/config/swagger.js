"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Mon API Géniale",
            version: "1.0.0",
        },
    },
    // Chemin vers les fichiers contenant les annotations
    apis: ["./src/routes/*.ts"],
};
exports.swaggerSpec = swaggerJsdoc(swaggerOptions);
//# sourceMappingURL=swagger.js.map