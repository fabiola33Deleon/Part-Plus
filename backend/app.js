import express from "express";
import cookieParser from "cookie-parser";
import ClienteRoutes from "./src/Routes/Cliente.js";
import ReservaRoutes from "./src/Routes/Reserva.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/Clientes", ClienteRoutes);
app.use("/api/Reserva", ReservaRoutes);

//Traemos el archivo json
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./PartPlus.json"), "utf-8")
);
 
//Mostramos el archivo al ingresar a /api/docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;