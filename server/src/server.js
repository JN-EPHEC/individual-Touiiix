import express from 'express';
import userRouter from "./routes/userRoutes";
import sequelize from "./config/database.js";
import "./models/User.js";
import { requestLogger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import cors from "cors";
function greet(name) {
    return `Hello, ${name}!`;
}
let message = greet("Pepito");
console.log(message);
async function testDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection à la DB reussie.');
        await sequelize.sync();
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(requestLogger);
app.use(cors());
app.use('/api/users', userRouter);
app.use(express.static('../public'));
app.use(errorHandler);
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