// Importa express
const express = require('express');

// Cria aplicação usando o express
const app = express();

// Importa rotas
const professorRoutes = require('./routes/professorRoutes');

// Middleware para JSON
app.use(express.json());

// Usa rotas
app.use(professorRoutes);

// Exporta app
module.exports = app;