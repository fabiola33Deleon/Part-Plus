import express from "express";
import cookieParser from "cookie-parser";
import ClienteRoutes from "./src/Routes/Cliente.js";
import ReservaRoutes from "./src/Routes/Reserva.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/Clientes", ClienteRoutes);
app.use("/api/Reserva", ReservaRoutes);

export default app;