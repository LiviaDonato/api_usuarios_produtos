import express from 'express'
import { testarConexao } from './db.js'

const app = express() // Criar instancia do express

testarConexao()

// Define a porta do servidor
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});