import express, {Request, Response} from 'express';
import userRouter from "./routes/userRoutes.js"
function greet(name: string): string {
    return `Hello, ${name}!`;
}

let message = greet("Pepito");
console.log(message);

const app = express();
const port = 3000;

app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenue sur mon serveur API')
})
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});

const etudiants = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
];

app.get('/api/data', (req: Request, res: Response) => {
    res.json(etudiants)
});

app.get('/api/hello/:name', (req: Request, res: Response) => {
    const name = req.params.name
    res.json({
        message: `Bonjour ${name}`,
        timestamp: new Date(),
    });
});