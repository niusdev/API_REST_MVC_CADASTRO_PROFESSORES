<div align="center">

# API REST — Cadastro de Professores

**Node.js · Express · MySQL · Arquitetura MVC**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

</div>

## Sobre o Projeto

Sistema back-end desenvolvido como avaliação prática da disciplina de **Desenvolvimento Web**. A API realiza um CRUD completo de professores, seguindo a arquitetura MVC e boas práticas de desenvolvimento com programação assíncrona.

**Disciplina:** Desenvolvimento Web  
**Professor:** Evandro de Lima Rodrigues  
**Instituição:** IFCE Campus Tianguá

## Funcionalidades (ENDPOINTS)

| Método   | Rota               | Descrição                         |
| -------- | ------------------ | --------------------------------- |
| `GET`    | `/professores`     | Retorna todos os professores      |
| `GET`    | `/professores/:id` | Retorna um professor pelo ID      |
| `POST`   | `/professores`     | Cadastra um novo professor        |
| `PUT`    | `/professores/:id` | Atualiza os dados de um professor |
| `DELETE` | `/professores/:id` | Remove um professor               |

<details>
<summary>Ver exemplo de resposta</summary>

```json
{
  "mensagem": "Professor cadastrado com sucesso!"
}
```
</details>

## Como Rodar

**Pré-requisitos:** Node.js, MySQL e Postman instalados.

```bash
# Clone o repositório
git clone https://github.com/niusdev/API_REST_MVC_CADASTRO_PROFESSORES.git
cd API_REST_MVC_CADASTRO_PROFESSORES

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

> Acesse em: `http://localhost:3000`

**Antes de iniciar**, execute o script SQL abaixo no MySQL e configure seu usuário e senha em `src/database/conexao.js`.

```sql
CREATE DATABASE escola;
USE escola;

CREATE TABLE professores (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  nome       VARCHAR(100)  NOT NULL,
  disciplina VARCHAR(100)  NOT NULL,
  email      VARCHAR(100)  NOT NULL,
  salario    DECIMAL(10,2) NOT NULL
);
```

## Estrutura de Pastas

```
projeto-api-professores/
│
├── src/
│   ├── controllers/        # Regras das requisições
│   │   └── professorController.js
│   ├── models/             # Acesso ao banco de dados
│   │   └── professorModel.js
│   ├── routes/             # Definição das rotas
│   │   └── professorRoutes.js
│   ├── database/           # Conexão com o MySQL
│   │   └── conexao.js
│   └── app.js
│
├── server.js
└── package.json
```

## Stack & Dependências

```json
"dependencies": {
  "express": "^5.2.1",
  "mysql2": "^3.22.4",
  "nodemon": "^3.1.14"
}
```

## Autor

Feito por **Vinícius Gomes Damascena**

[![GitHub](https://img.shields.io/badge/GitHub-niusdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/niusdev/API_REST_MVC_CADASTRO_PROFESSORES)
