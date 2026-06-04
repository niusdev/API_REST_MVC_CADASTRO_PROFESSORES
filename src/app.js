// Importa express
const express = require('express');

// Cria aplicação
const app = express();

// Importa rotas
const professorRoutes = require('./routes/professorRoutes');

// Middleware para JSON
app.use(express.json());

// Usa rotas
app.use(professorRoutes);

// Exporta app
module.exports = app;