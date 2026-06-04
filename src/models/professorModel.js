// Importa conexão com banco
const conexao = require('../database/conexao');

// Função para listar todos os professores cadastrados
const listarProfessores = async () => {
    // SQL de consulta
    const sql = 'SELECT * FROM professores';

    // Executa SQL
    const [rows] = await conexao.execute(sql);

    // Retorna registros
    return rows;
}

// Função para buscar professor por ID
const buscarProfessorPorId = async (id) => {
    // SQL de consulta com parâmetro
    const sql = 'SELECT * FROM professores WHERE id = ?';

    // Executa SQL
    const [rows] = await conexao.execute(sql, [id]);

    // Retorna professor com respectivo ID
    return rows[0];
}


// Função para cadastrar professor
const criarProfessor = async (professor) => {
    // Desestrutura objeto professor
    const { nome, disciplina, email, salario } = professor;

    // SQL de inserção
    const sql = `INSERT INTO professores (nome, disciplina, email, salario)
                VALUES (?, ?, ?, ?)`;

    // Executa SQL
    const [resultado] = await conexao.execute(sql, [
        nome, disciplina, email, salario
    ]);

    // Retorna ID inserido
    return resultado.insertId;
}

// Função para atualizar professor
const atualizarProfessor = async (id, professor) => {
    // Desestrutura objeto professor
    const { nome, disciplina, email, salario } = professor;

    // SQL de atualização
    const sql = `
        UPDATE professores
            SET nome = ?, disciplina = ?, email = ?, salario = ?
        WHERE id = ?`;

    // Executa SQL
    await conexao.execute(sql, [
        nome, disciplina, email, salario, id
    ]);
}

// Função para remover professor
const deletarProfessor = async (id) => {
    // SQL de remoção
    const sql = 'DELETE FROM professores WHERE id = ?';

    // Executa SQL
    await conexao.execute(sql, [id]);
}

// Exporta funções
module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    criarProfessor,
    atualizarProfessor,
    deletarProfessor
}