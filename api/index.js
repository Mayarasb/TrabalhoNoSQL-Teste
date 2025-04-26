import express, { json } from 'express';
import petRouter from './routes/pet.js';
import agendaRouter from './routes/agendas.js';  // Ajuste o caminho se necessário
import { connectMongoDB } from './config/db.js';
import cors from 'cors'

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json())
app.use('/', express.static('public'))

app.use('/pets', petRouter)
app.use('/agendas', agendaRouter);  // Agora o prefixo '/agenda' será usado para suas rotas




connectMongoDB(app).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}!`)
    })
});