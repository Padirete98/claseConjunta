import express from 'express';
import dotenv from 'dotenv'; //libreria para leer el archivo .env

dotenv.config(); //nos instruye al puerto
const PORT = process.env.PORT || 3001;

const app = express();


