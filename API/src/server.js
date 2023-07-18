require("express-async-errors");
require("dotenv/config");

const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");


migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());// Aqui estamos determinando qual será o padrão que será recebida as informações do Body

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));


app.use(routes);

app.use((error, request,  response, next) => {

  if(error instanceof AppError) { //definindo se o erro foi feito pelo cliente ou pelo servidor. este tipo de condição indica um possível erro do Cliente
  
  return  response.status(error.statusCode).json({
  status: "error",
  message: error.message
});
}
console.error(error);

return response.status(500).json({
  status:"error",
  message: "Internal server error",
});
});




const PORT = process.env.PORT || 3333; 

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`) );
