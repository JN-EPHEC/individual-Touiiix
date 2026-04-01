"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userRoutes_1 = require("./routes/userRoutes");
const database_js_1 = require("./config/database.js");
require("./models/User.js");
const logger_1 = require("./middlewares/logger");
const errorHandler_1 = require("./middlewares/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swagger_1 = require("./config/swagger");
const cors_1 = require("cors");
function greet(name) {
    return `Hello, ${name}!`;
}
let message = greet("Pepito");
console.log(message);
async function testDB() {
    try {
        await database_js_1.default.authenticate();
        console.log('Connection à la DB reussie.');
        await database_js_1.default.sync();
        console.log('modèles synchronisés avec la DB');
        app.listen(port, () => {
            console.log(`Serveur lancé sur http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('Impossible de se connecter à la DB:', error);
    }
}
;
testDB();
const app = express();
const port = 3000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger_1.swaggerSpec));
app.use(express.json());
app.use(logger_1.requestLogger);
app.use((0, cors_1.default)());
app.use('/api/users', userRoutes_1.default);
app.use(express.static('../public'));
app.use(errorHandler_1.errorHandler);
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur API');
});
const etudiants = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
];
app.get('/api/data', (req, res) => {
    res.json(etudiants);
});
app.get('/api/hello/:name', (req, res) => {
    const name = req.params.name;
    res.json({
        message: `Bonjour ${name}`,
        timestamp: new Date(),
    });
});
//# sourceMappingURL=server.js.map