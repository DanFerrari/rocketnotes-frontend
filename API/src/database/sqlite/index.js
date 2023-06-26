const sqlite3 = require("sqlite3"); //importando os bancos de dados
const sqlite = require("sqlite");
const path = require("path");

async function sqliteConnection(){ // esta criando uma funcao assincrona pois o arquivo database pode nao estar criado no diretorio do banco, porem quando a funcao é executada, se nao tiver um arquivo database.db, ele é criado pela função, caso tenha ele irá buscar o arquivo.
const database = await sqlite.open({
  filename: path.resolve(__dirname,"..","database.db"),
  driver:sqlite3.Database
})
return database;

}

module.exports = sqliteConnection;