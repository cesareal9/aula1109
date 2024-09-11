const express = require('express');
const connectDB = require('./config/db.js');
const PORT = 5000;

const cliente_routes = require('../src/routes/cliente_routes.js');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/clientes', cliente_routes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});