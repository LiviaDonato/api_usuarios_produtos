import express from 'express'
import { testarConexao } from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import UsuarioRoutes from './src/routes/usuarioRoutes.js'
import ProdutoRoutes from './src/routes/produtoRoutes.js'

const app = express() // Criar instancia do express

testarConexao()
app.use(cors())
// Uso do body-parser para receber os valores do corpo na requisição json
app.use(bodyParser.json())
// Definir as rotas de usuario importadas no arquivo
app.use(UsuarioRoutes)
// Definir as rotas de produto importadas no arquivo
app.use(ProdutoRoutes)

// Define a porta do servidor
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});