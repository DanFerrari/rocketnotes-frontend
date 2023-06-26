const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated =  require ("../middlewares/ensureAuthenticated");


const tagsRoutes = Router();

const  tagsController = new TagsController();



tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

  module.exports = tagsRoutes; //exportando as rotas para que o arquivo possa ser usado por qualquer um