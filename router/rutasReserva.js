import express from "express";

import { ControladorReserva } from "../controllers/controladorReservas.js";

let controlador = new ControladorReserva()
export let rutasAPI = express.Router()

rutasAPI.post("/api/reservas", controlador.registrar) //POST se utiliza para crear una reserva
rutasAPI.get("/api/reservas", controlador.buscaTodas) // GET para obtener todas las reservas
rutasAPI.get("/api/reservas/:id", controlador.buscarPorId) // GET  para buscar una reserva por id
rutasAPI.put("/api/reservas/:id", controlador.modificar) // PUT para modificar una reserva
rutasAPI.delete("/api/reservas/:id", controlador.eliminar) // DELETE para elimiinar una reserva
