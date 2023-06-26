const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");

const UserAvatarController = require("../controllers/UserAvatarController");

const ensureAuthenticated =  require ("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const upload = multer(uploadConfig.MULTER); //Utilizando a biblioteca multer para enviar o arquivo

const usersController = new UsersController();

const userAvatarController = new UserAvatarController();


// function myMiddleware(request,response,next){
// console.log("voce passou pelo middleware7");

// if(!request.body.isAdmin){
//   return response.json({message: "user unauthorized"});
// }

// next(); // next é a função do middleware que chama a próxima função sem ela , não é executada nenhuma ação.






// }

usersRoutes.post("/",  usersController.create);
usersRoutes.put("/",ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar",ensureAuthenticated, upload.single("avatar"),userAvatarController.update);

  module.exports = usersRoutes; //exportando as rotas para que o arquivo possa ser usado por qualquer um