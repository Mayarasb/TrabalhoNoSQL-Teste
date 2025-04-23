import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();
let db;

// função que conecta com o Banco
export async function connectMongoDB(app) {
    try {
        const MONGO_URI = process.env.MONGO_URI; //URI do banco do arquivo .env
        const client = new MongoClient(MONGO_URI); // criação do objeto MongoClient
        await client.connect();  // conectando com o banco
        db = client.db(); // cria a instância do banco 
        app.locals.db = db; //distribuindo o banco para toda aplicação 
        return db; // retorno da função
        
    } catch (error) {
        console.error('Falha ao conectar ao MongoDB: ', error); // caso haja algum erro, retorna para nós
        process.exit(1) // saí do processo 
    }
}
export{db}; // exporta o objeto do banco