const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota /Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET:     Buscar/listar informações do back-end
 * POST:    Criar informações no back-end
 * PUT:     Alterar informações no back-end
 * DELETE:  Deleta uma informações no back-end
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params:    Parâmetros nomeados enviandos na rota após o "?" (filtros, paginação, etc)
 * Route Params:    Parâmetros utilizados para identificar recursos
 * Request Body:    Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Tipos de Bancos de dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: Select * from users
 * Query Builder: table('user').select('*').where()
 */

module.exports = app;