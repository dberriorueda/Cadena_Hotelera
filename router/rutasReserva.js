import express from "express";

import { ControladorReserva } from "../controllers/controladorReservas.js";
let controlador = new ControladorReserva()

export let rutasAPI = express.Router()

rutasAPI.post("/api/reservas", controlador.registrar)
rutasAPI.get("/api/reservas", controlador.buscaTodas)
rutasAPI.post("/api/reserva/:id", controlador.buscarPorId)
rutasAPI.put("/api/reservas/:id", controlador.modificar)
rutasAPI.post("/api/reservas/:id", controlador.eliminar)