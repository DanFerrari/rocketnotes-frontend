const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const ensureAuthenticated =  require("../middlewares/ensureAuthenticated");
const notesRoutes = Router();

const notesController = new NotesController();


// function myMiddleware(request,response,next){
// console.log("voce passou pelo middleware7");

// if(!request.body.isAdmin){
//   return response.json({message: "user unauthorized"});
// }

// next(); // next é a função do middleware que chama a próxima função sem ela , não é executada nenhuma ação.


notesRoutes.use(ensureAuthenticated);//adiciona o middleware de autenticação em todas as rotas




// }
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id",notesController.show);
notesRoutes.delete("/:id",notesController.delete);
notesRoutes.get("/",  notesController.index);
  module.exports = notesRoutes; //exportando as rotas para que o arquivo possa ser usado por qualquer um