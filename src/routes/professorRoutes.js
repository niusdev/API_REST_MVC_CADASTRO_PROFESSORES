// Importa express
const express = require('express');

// Cria roteador
const router = express.Router();

// Importa controller
const professorController = require('../controllers/professorController');

// Rota GET listar professores
router.get('/professores', professorController.listarProfessores);

// Rota GET buscar professor por ID
router.get('/professores/:id', professorController.buscarProfessorPorId);

// Rota POST cadastrar professor
router.post('/professores', professorController.criarProfessor);

// Rota PUT atualizar professor
router.put('/professores/:id', professorController.atualizarProfessor);

// Rota DELETE remover professor
router.delete('/professores/:id', professorController.deletarProfessor);

// Exporta rotas
module.exports = router;