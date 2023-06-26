//Criando uma sessao para o usuário.
const knex = require("../database/knex"); //chamando o banco
const AppError = require("../utils/AppError"); // chamando o arquivo para criação de erros.
const  {compare} = require("bcryptjs");//metodo do bcrypt para comparar um senha que esta criptografada no banco com uma senha que o usuário inseriu para logar
const authConfig = require("../configs/auth"); // chamando o arquivo auth para definir o secret e o expiresIn do JWT
const {sign} = require("jsonwebtoken"); //Chamando o metodo sign da biblioteca jsonwebtoken para criar um token de login para o usuário após a verificação.


class SessionsController {
async create(request, response) {
const { email, password} = request.body;

//validação de email do usuário
const user = await knex("users").where({email}).first();

//verificação se o email do usuário esta certo
if(!user){
  throw new AppError("E-mail e/ou senha incorreta",401);
}

//validação de senha do usuário
const passwordMatched = await compare(password, user.password);

//verificação se a senha esta correta.
if(!passwordMatched){
  throw new AppError("E-mail e/ou senha incorreta",401);
}

const {secret, expiresIn} = authConfig.jwt;
const token = sign({},secret,{
  subject: String(user.id),
  expiresIn
})//passando os parâmetros para configurar o token




return response.json({user, token});// gerando a resposta do banco de dados.


}
}


module.exports = SessionsController;