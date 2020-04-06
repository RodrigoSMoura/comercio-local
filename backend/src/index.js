const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

/**
 * Rotas e Recursos
 */

/**
 * Métodos HTTP
 * GET: Obter recursos
 * POST: Inserir um recurso 
 * PUT: Alterar um recurso
 * DELETE: Apagar um recurso
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: parâmetros nomeados enviados na rota. Utilizados após interrogação (?) e acrescentados com &  (filtros, paginação)
 *  Ex: /users?nome=Rodrigo 
 * 
 * Route Params: parâmetros utilizados para identificar recursos
 *  Ex: /users/:id
 * 
 * Request Body: corpo da requisicao utilizado para criar (POST) ou alterar (PUT) recursos.
 */

 /**
  * 
  * Bancos de dados
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */

  /**
   * Driver: SELECT * from table
   * Query Builder: table('table').select('*').where() (via knex.js)
   */

app.listen(3333);