// Importa a biblioteca mysql2 utilizando promises
const mysql = require('mysql2/promise');

// Cria a conexão com banco de dados
const conexao = mysql.createPool({
    // Endereço do servidor MySQL
    host: 'localhost',

    // Usuário do banco
    user: 'root',

    // Senha do banco (senha abaixo é um exemplo, coloque a sua no lugar)
    password: '123456',
    
    // Nome do banco de dados
    database: 'escola'
});

// Exporta conexão
module.exports = conexao;