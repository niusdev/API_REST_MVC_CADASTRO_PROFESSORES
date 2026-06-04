// Importa model
const professorModel = require('../models/professorModel')

// Listar professores
const listarProfessores = async (req, res) => {

    // Busca professores no banco
    const professores = await professorModel.listarProfessores;

    // Retorna JSON
    res.json(professores);
}

// Buscar professor por ID
const buscarProfessorPorId = async (req, res) => {
    // Captura ID da URL
    const { id } = req.params;

    // Busca professor
    const professor = await professorModel.buscarProfessorPorId(id);

    // Verifica se professor existe
    if (!professor) {
        // Retorna erro
        return res.status(404).json({
            mensagem: 'Professor não encontrado!'
        });
    }

    // Retorna professor
    res.json(professor);
}

// Criar professor
const criarProfessor = async (req, res) => {

    // Captura dados enviados
    const { nome, disciplina, email, salario } = req.body;

    // Validação simples
    if (!nome || !disciplina || !email || !salario) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios'
        });
    }

    // Cria objeto
    const professor = { nome, disciplina, email, salario };

    // Salva professor
    const id = await professorModel.criarProfessor(professor);

    // Retorna resposta
    res.status(201).json({
        mensagem: 'Professor cadastrado com sucesso!',
        id
    });
}

// Atualizar professor
const atualizarProfessor = async (req, res) => {

    // Captura ID
    const { id } = req.params;

    // Captura dados
    const { nome, disciplina, email, salario } = req.body;

    // Cria objeto
    const professor = { nome, disciplina, email, salario };

    // Atualiza professor
    await professorModel.atualizarProfessor(id, professor);

    // Retorna resposta
    res.json({
        mensagem: 'Professor atualizado com sucesso!'
    });
}

// Deletar professor
const deletarProfessor = async (req, res) => {

    // Captura ID
    const { id } = req.params;

    // Remove professor
    await professorModel.deletarProfessor(id);

    // Retorna resposta
    res.json({
        mensagem: 'Professor removido com sucesso!'
    });
}

// Exporta funções
module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    criarProfessor,
    atualizarProfessor,
    deletarProfessor
}