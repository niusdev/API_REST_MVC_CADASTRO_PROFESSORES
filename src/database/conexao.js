// Importa a biblioteca mysql2 utilizando promises
const mysql = require('mysql2/promise');

// Cria a conexão com banco de dados
const conexao = mysql.createPool({
    // Endereço do servidor MySQL
    host: 'localhost',

    // Usuário do banco
    user: 'root',

    // Senha do banco
    password: '123456',
    
    // Nome do banco de dados
    database: 'api_clientes'
});

// Exporta conexão
module.exports = conexao;