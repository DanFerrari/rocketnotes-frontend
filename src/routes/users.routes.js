const { Router } = require("express");

const UsersController = require("../controllers/UsersController");


const usersRoutes = Router();

const usersController = new UsersController();


// function myMiddleware(request,response,next){
// console.log("voce passou pelo middleware7");

// if(!request.body.isAdmin){
//   return response.json({message: "user unauthorized"});
// }

// next(); // next é a função do middleware que chama a próxima função sem ela , não é executada nenhuma ação.






// }

usersRoutes.post("/",  usersController.create);

  module.exports = usersRoutes; //exportando as rotas para que o arquivo possa ser usado por qualquer um